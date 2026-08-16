import { useState } from "react";

import "./style.scss";

const App = () => {
  const [promptText, setPromptText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [size, setSize] = useState("1024x1024");
  const [quality, setQuality] = useState("high");

  const handleReset = () => {
    setPromptText("");
    setImage(null);
    setError("");
  };

  const handleDownload = () => {
    if (!image) return;

    const link = document.createElement("a");

    link.href = `data:image/png;base64,${image}`;
    link.download = "generated-image.png";

    link.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!promptText.trim()) {
      return;
    }

    setLoading(true);
    setError("");
    setImage(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: promptText,
            size,
            quality,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setImage(data.image);
    } catch (error) {
      console.error(error);
      setImage(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Image Generator</h1>
      <div className="stage">
        {loading && <p>Generating image...</p>}
        {error && <p>{error}</p>}
        {image && (
          <img src={`data:image/png;base64,${image}`} alt={promptText} />
        )}
      </div>
      <textarea
        className="prompt"
        onChange={(e) => setPromptText(e.target.value)}
        value={promptText}
      />
      <select
        className="selector"
        value={size}
        onChange={(e) => setSize(e.target.value)}>
        <option value="1024x1024">Square</option>
        <option value="1536x1024">Landscape</option>
        <option value="1024x1536">Portrait</option>
      </select>
      <select
        className="selector"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
      {image && (
        <>
          <button className="download" onClick={handleDownload}>
            DOWNLOAD
          </button>
          <button className="download" onClick={handleReset}>
            RESET
          </button>
        </>
      )}
    </div>
  );
};

export default App;
