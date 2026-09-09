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
    size,
    setSize,
    quality,
    setQuality,
    quantity,
    setQuantity,
    setPromptImproved,
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
      onKeyDown={() => {
        setPromptImproved(false);
      }}
      setSize={setSize}
      quality={quality}
      setQuality={setQuality}
      quantity={quantity}
      setQuantity={setQuantity}
      onImprovePrompt={controller.handleImprovePrompt}
    />
  );
};

export default TextToImage;
