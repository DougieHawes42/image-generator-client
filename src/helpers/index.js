import { useState } from "react";

const controllers = () => {
  const [promptText, setPromptText] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [size, setSize] = useState("1024x1024");
  const [quality, setQuality] = useState("high");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [initialImageFile, setInitialImageFile] = useState(null);
  const [initialImagePreview, setInitialImagePreview] = useState(null);
  const [editPrompt, setEditPrompt] = useState("");
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleReset = () => {
    setPromptText("");
    setEditPrompt("");
    setImages([]);
    setError("");

    setSize("1024x1024");
    setQuality("high");
    setQuantity(1);

    setSelectedImage(null);
    setSelectedIndex(null);
    setInitialImageFile(null);
    setInitialImagePreview(null);

    setShowImageUpload(false);
  };

  const handleDownload = () => {
    if (!selectedImage) return;

    const link = document.createElement("a");

    link.href = selectedImage;
    link.download = "generated-image.png";

    link.click();
  };

  const handleImageScroll = (d) => {
    if (selectedIndex === null) return;
    if (d === "left") {
      const newIndex =
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(`data:image/png;base64,${images[newIndex]}`);
    } else {
      const newIndex =
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(`data:image/png;base64,${images[newIndex]}`);
    }
  };

  const handleInitialImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setInitialImageFile(file);
    setInitialImagePreview(URL.createObjectURL(file));
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (!initialImageFile) {
      setError("Please select an image.");
      return;
    }

    if (!editPrompt.trim()) {
      setError("Please enter an editing prompt.");
      return;
    }

    setError("");

    console.log("Image:", initialImageFile);
    console.log("Edit prompt:", editPrompt);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/edit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: editPrompt,
            image: initialImageFile,
            size,
            quality,
            quantity,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setImages(data.images);
    } catch (error) {
      console.error(error);
      setImages([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!promptText.trim()) {
      return;
    }

    setLoading(true);
    setError("");
    setImages([]);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/image/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: promptText,
            size,
            quality,
            quantity,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setImages(data.images);
    } catch (error) {
      console.error(error);
      setImages([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    promptText,
    setPromptText,

    images,
    setImages,

    loading,
    setLoading,

    error,
    setError,

    size,
    setSize,

    quality,
    setQuality,

    quantity,
    setQuantity,

    selectedImage,
    setSelectedImage,

    selectedIndex,
    setSelectedIndex,

    initialImageFile,
    setInitialImageFile,

    initialImagePreview,
    setInitialImagePreview,

    editPrompt,
    setEditPrompt,

    showImageUpload,
    setShowImageUpload,

    handleReset,

    handleSubmit,

    handleDownload,

    handleImageScroll,

    handleInitialImageChange,
  };
};

export default controllers;
