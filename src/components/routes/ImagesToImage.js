// dependencies
import { useState } from "react";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImagesToImage = () => {
  const [value, setValue] = useState("");

  return (
    <GenerateRoute
      title="Images to Image"
      subtitle="enter a prompt and an {image/some images} to generate a new image"
      name="prompt"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      resetVisible={value.length > 0}
    />
  );
};

export default ImagesToImage;
