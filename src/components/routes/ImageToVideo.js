// dependencies
import { useState } from "react";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImageToVideo = () => {
  const [value, setValue] = useState("");

  return (
    <GenerateRoute
      title="Image to Video"
      subtitle="Enter an image and a prompt to generate a video"
      name="prompt"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      resetVisible={value.length > 0}
    />
  );
};

export default ImageToVideo;
