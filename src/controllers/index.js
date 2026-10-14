// dependencies
import { useState } from "react";
import axios from "axios";

const controllers = () => {
  const [promptText, setPromptText] = useState("deadpool washing the car");
  const [originalPromptText, setOriginalPromptText] = useState("");

  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const [theme, setTheme] = useState("NONE");
  const [size, setSize] = useState("1024x1024");
  const [quality, setQuality] = useState("low");
  const [quantity, setQuantity] = useState(4);

  const [imagesToImageFiles, setImagesToImageFiles] = useState([]);
  const [imageToVideoStartFile, setImageToVideoStartFile] = useState(null);
  const [imageToVideoEndFile, setImageToVideoEndFile] = useState(null);

  const [images, setImages] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [improvePromptLoading, setImprovePromptLoading] = useState(false);
  const [promptImproved, setPromptImproved] = useState(false);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImprovePrompt = async () => {
    if (!promptText.trim()) {
      return;
    }
    if (promptImproved) {
      setOriginalPromptText(promptText);
    }

    setImprovePromptLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/image/improve`,
        {
          prompt: promptText,
        },
      );

      setPromptText(response.data.prompt);
      setPromptImproved(true);
    } catch (error) {
      console.error("Prompt improvement failed:", error);
    } finally {
      setImprovePromptLoading(false);
    }
  };

  const handleImagesToImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    setImagesToImageFiles((prevFiles) => [...files, ...prevFiles]);

    e.target.value = "";
  };

  const handleImageToVideoChange = (e, type) => {
    const file = e.target.files[0];

    if (type === "start") {
      setImageToVideoStartFile(file);
    }

    if (type === "end") {
      setImageToVideoEndFile(file);
    }
  };

  const handleTextToImageSubmit = async (e) => {
    e.preventDefault();

    if (!promptText.trim()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/image/submit`,
        {
          prompt: promptText,
          theme,
          size,
          quality,
          quantity,
          moderation: "low",
        },
      );

      const newImages = response.data.images;

      setImages((previousImages) => [...previousImages, ...newImages]);
    } catch (error) {
      console.error("FULL ERROR:", error);
      console.error("MESSAGE:", error.message);
      console.error("RESPONSE:", error.response);
      console.error("RESPONSE DATA:", error.response?.data);

      setError(
        error.response?.data?.error || error.message || "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImagesToImageSubmit = async (e) => {
    e.preventDefault();

    const hasImages = imagesToImageFiles.length > 0;
    const hasPrompt = promptText.trim().length > 0;
    const hasTheme = theme && theme !== "NONE";

    if (!hasImages || (!hasPrompt && !hasTheme)) {
      setError(
        "Please upload an image and provide a prompt or select a theme.",
      );
      return;
    }

    const formData = new FormData();

    imagesToImageFiles.forEach((image) => {
      formData.append("images", image);
    });

    formData.append("prompt", promptText);
    formData.append("theme", theme);
    formData.append("size", size);
    formData.append("quality", quality);
    formData.append("quantity", String(quantity));

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/image/images-to-image`,
        formData,
      );

      const newImages = response.data.images;

      setImages((previousImages) => [...previousImages, ...newImages]);
    } catch (error) {
      console.error("Images to image failed:", error);

      setError(
        error.response?.data?.error || error.message || "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImageToVideoSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("prompt", promptText);
    formData.append("startImage", imageToVideoStartFile);

    if (imageToVideoEndFile) {
      formData.append("endImage", imageToVideoEndFile);
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/image/image-to-video`,
        formData,
      );

      setImages((previousImages) => [
        ...previousImages,
        {
          src: response.data.videoUrl,
          type: "video",
        },
      ]);
    } catch (error) {
      console.error("Images to video failed:", error);

      setError(
        error.response?.data?.error || error.message || "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (selectedImageIndex === null) return;

    const item = images[selectedImageIndex];

    const src = typeof item === "string" ? item : item?.src;

    if (!src) return;

    if (typeof item !== "string") {
      const response = await fetch(src);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "generated-video.mp4";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      return;
    }

    const link = document.createElement("a");

    link.href = `data:image/png;base64,${src}`;
    link.download = "generated-image.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    setQuality,
    setQuantity,
    showThemeSelector,
    setShowThemeSelector,
    theme,
    setTheme,
    images,
    setImages,

    imagesToImageFiles,
    imageToVideoStartFile,
    imageToVideoEndFile,

    disabled,
    setDisabled,

    loading,
    setLoading,

    improvePromptLoading,
    setImprovePromptLoading,
    promptImproved,
    setPromptImproved,

    error,
    setError,

    showModal,
    setShowModal,

    promptText,
    setPromptText,
    originalPromptText,
    setOriginalPromptText,
    size,
    setSize,
    quality,
    setQuality,
    quantity,
    setQuantity,

    handleImprovePrompt,

    handleDownload,

    handleImagesToImageChange,
    handleImageToVideoChange,

    handleTextToImageSubmit,
    handleImagesToImageSubmit,
    handleImageToVideoSubmit,

    selectedImageIndex,
    setSelectedImageIndex,

    setImagesToImageFiles,
    setImageToVideoStartFile,
    setImageToVideoEndFile,
  };
};

export default controllers;
console;
