import controllers from "../../controllers/index.js";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImagesToBlendedImage = () => {
  const controller = controllers();

  return (
    <GenerateRoute
      title="Images to Blended Image"
      subtitle="Enter {an image/some images} plus an image to blend them with to generate a new image"
      name="prompt"
      value={controller.promptText}
      onChange={(e) => controller.setPromptText(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
    />
  );
};

export default ImagesToBlendedImage;
