// dependencies
import { useState } from "react";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImagesToBlendedImage = () => {
  const [value, setValue] = useState("");

  return (
    <GenerateRoute
      title="Images to Blended Image"
      subtitle="Enter {an image/some images} plus an image to blend them with to generate a new image"
      name="prompt"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      resetVisible={value.length > 0}
    />
  );
};

export default ImagesToBlendedImage;
