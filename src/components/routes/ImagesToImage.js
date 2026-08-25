// dependencies
import { useState } from "react";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImagesToImage = () => {
  const [value, setValue] = useState("");

  const imageUpload = (
    <div className="images-to-image-image-upload">
      <label className="images-to-image-image-upload-label">
        Upload Images
      </label>
      <div className="images-to-image-image-upload-input">
        <input type="file" />
      </div>
      <div className="images-to-image-images-preview"></div>
    </div>
  );

  return (
    <GenerateRoute
      imageUpload={imageUpload}
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
