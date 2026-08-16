import { useState } from "react";

import "./style.scss";

const App = () => {
  const [promptText, setPromptText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!promptText.trim()) {
      return;
    }

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Image Generator</h1>
      <div className="stage">
        {loading && <p>Generating image...</p>}
        {image && (
          <img src={`data:image/png;base64,${image}`} alt={promptText} />
        )}
      </div>
      <textarea
        className="prompt"
        onChange={(e) => setPromptText(e.target.value)}
        value={promptText}
      />
      <button className="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default App;
