// dependencies
import { useState } from "react";
import axios from "axios";

const controllers = () => {
  const [promptText, setPromptText] = useState("");
  const [size, setSize] = useState("1024x1024");
  const [quality, setQuality] = useState("low");
  const [quantity, setQuantity] = useState(4);

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

  return {
    images,
    setImages,

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

    handleTextToImageSubmit,
    selectedImageIndex,
    setSelectedImageIndex,
  };
};

export default controllers;
