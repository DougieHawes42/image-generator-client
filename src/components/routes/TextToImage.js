// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const TextToImage = ({ controller }) => {
  const {
    promptText,
    setPromptText,
    handleTextToImageSubmit,
    theme,
    setTheme,
    size,
    setSize,
    quality,
    setQuality,
    quantity,
    setQuantity,
    setPromptImproved,
    setShowThemeSelector,
    handleImprovePrompt,
    showThemeSelector,
  } = controller;

  return (
    <GenerateRoute
      title="Text to Image"
      subtitle="Type in a prompt for the image you wish to generate"
      name="prompt"
      value={promptText}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      onSubmit={handleTextToImageSubmit}
      size={size}
      onChange={(e) => {
        setPromptText(e.target.value);
      }}
      theme={theme}
      setTheme={setTheme}
      onKeyDown={() => {
        setPromptImproved(false);
      }}
      setSize={setSize}
      quality={quality}
      setQuality={setQuality}
      quantity={quantity}
      setQuantity={setQuantity}
      onImprovePrompt={handleImprovePrompt}
      showThemeSelector={showThemeSelector}
      setShowThemeSelector={setShowThemeSelector}
    />
  );
};

export default TextToImage;
