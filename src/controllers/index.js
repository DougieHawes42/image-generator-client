// dependencies
import { useState } from "react";
import axios from "axios";

const controllers = () => {
  const [promptText, setPromptText] = useState("");
  const [size, setSize] = useState("1024x1024");
  const [quality, setQuality] = useState("low");
  const [quantity, setQuantity] = useState(4);

  const [imagesToImageFiles, setImagesToImageFiles] = useState([]);

  const [images, setImages] = useState([]);

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
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImagesToImageSubmit = async (e) => {
    e.preventDefault();

    if (!imagesToImageFiles || imagesToImageFiles.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    if (!promptText.trim()) {
      setError("Please provide a prompt.");
      return;
    }

    console.log("Submitting images to image with prompt:", promptText);

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();

      imagesToImageFiles.forEach((image) => {
        formData.append("images", image);
      });

      formData.append("prompt", promptText);
      formData.append("size", size);
      formData.append("quality", quality);
      formData.append("quantity", String(quantity));

      console.log("IMAGES TO SEND:", imagesToImageFiles);

      imagesToImageFiles.forEach((image, index) => {
        console.log(
          `IMAGE ${index}:`,
          image,
          "is File:",
          image instanceof File,
          "name:",
          image?.name,
          "type:",
          image?.type,
        );
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/image/images-to-image`,
        formData,
      );

      const newImages = response.data.images;

      setImages((previousImages) => [...previousImages, ...newImages]);
    } catch (error) {
      console.error("Images to image failed:", error);

      setError(
        error.response?.data?.error ||
          error.message ||
          "Something went wrong while generating the image.",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    images,
    setImages,

    imagesToImageFiles,

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

    handleImagesToImageChange,

    handleTextToImageSubmit,
    handleImagesToImageSubmit,

    selectedImageIndex,
    setSelectedImageIndex,
  };
};

export default controllers;
