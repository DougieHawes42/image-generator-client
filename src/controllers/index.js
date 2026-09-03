// dependencies
import { useState } from "react";
import axios from "axios";

const controllers = () => {
  const [promptText, setPromptText] = useState("");
  const [size, setSize] = useState("1024x1024");
  const [quality, setQuality] = useState("low");
  const [quantity, setQuantity] = useState(4);

  const [imagesToImageFiles, setImagesToImageFiles] = useState([]);
  const [imageToVideoStartFile, setImageToVideoStartFile] = useState(null);
  const [imageToVideoEndFile, setImageToVideoEndFile] = useState(null);

  const [images, setImages] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

    const formData = new FormData();

    imagesToImageFiles.forEach((image) => {
      formData.append("images", image);
    });

    formData.append("prompt", promptText);
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

    const src = images[selectedImageIndex]?.src;

    if (!src) return;

    if (src.includes(".mp4")) {
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

    images,
    setImages,

    imagesToImageFiles,
    imageToVideoStartFile,
    imageToVideoEndFile,

    disabled,
    setDisabled,

    loading,
    setLoading,

    error,
    setError,

    showModal,
    setShowModal,

    promptText,
    setPromptText,
    size,
    setSize,
    quality,
    setQuality,
    quantity,
    setQuantity,

    handleDownload,

    handleImagesToImageChange,
    handleImageToVideoChange,

    handleTextToImageSubmit,
    handleImagesToImageSubmit,
    handleImageToVideoSubmit,

    selectedImageIndex,
    setSelectedImageIndex,
  };
};

export default controllers;
