import { useState } from "react";

import "./style.scss";

const App = () => {
  const [promptText, setPromptText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(promptText);
  };

  return (
    <div className="app">
      <h1 className="title">Image Generator</h1>
      <div className="stage"></div>
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
