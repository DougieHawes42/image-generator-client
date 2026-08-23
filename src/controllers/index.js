// dependencies
import { useState } from "react";
import axios from "axios";

const controllers = () => {
  const [promptText, setPromptText] = useState(
    "A night-time scene in Cambridge UK, with the River Cam reflecting the lights of the city, and the historic architecture of King's College Chapel in the background, under a starry sky. The scene is illuminated by warm streetlights, creating a cozy and inviting atmosphere. The river is calm, with gentle ripples reflecting the lights and buildings. The sky is clear, showcasing a beautiful array of stars, adding to the magical ambiance of the scene.",
  );

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);

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
          size: "1024x1024",
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

    handleTextToImageSubmit,
  };
};

export default controllers;
