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
  } = controller;

  return (
    <GenerateRoute
      title="Text to Image"
      subtitle="Type in a prompt for the image you wish to generate"
      name="prompt"
      value={promptText}
      onChange={(e) => setPromptText(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      resetVisible={promptText.length > 0}
      onClickReset={() => setPromptText("")}
      onSubmit={handleTextToImageSubmit}
      size={size}
      setSize={setSize}
      quality={quality}
      setQuality={setQuality}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
};

export default TextToImage;
