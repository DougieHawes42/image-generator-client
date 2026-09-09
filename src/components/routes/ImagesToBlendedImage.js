// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImagesToBlendedImage = ({ controller }) => {
  return (
    <GenerateRoute
      title="Images to Blended Image"
      subtitle="Enter {an image/some images} plus an image to blend them with to generate a new image"
      name="prompt"
      value={controller.promptText}
      onChange={(e) => {
        setPromptText(e.target.value);
        setPromptImproved(false);
      }}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      onImprovePrompt={controller.handleImprovePrompt}
    />
  );
};

export default ImagesToBlendedImage;
