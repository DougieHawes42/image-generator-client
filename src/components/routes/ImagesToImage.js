// dependencies
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";
import { ExampleImage } from "../utils/images.js";

const ImagesToImage = ({ controller }) => {
  const imageUpload = (
    <div className="images-to-image-image-upload">
      <label className="images-to-image-image-upload-label">
        Upload Images
      </label>
      <div className="images-to-image-image-upload-container">
        <div className="images-to-image-image-upload-input">
          <label htmlFor="image-upload">
            <FaPlus />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={controller.handleImagesToImageChange}
          />
        </div>
        <div className="images-to-image-images-preview">
          {controller.imagesToImageFiles.map((file, index) => (
            <ExampleImage file={file} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <GenerateRoute
      imageUpload={imageUpload}
      title="Images to Image"
      subtitle="enter a prompt and an image/some images to generate a new image"
      name="prompt"
      value={controller.promptText}
      onChange={(e) => controller.setPromptText(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      resetVisible={controller.promptText.length > 0}
      onSubmit={controller.handleImagesToImageSubmit}
      size={controller.size}
      setSize={controller.setSize}
      quality={controller.quality}
      setQuality={controller.setQuality}
      quantity={controller.quantity}
      setQuantity={controller.setQuantity}
    />
  );
};

export default ImagesToImage;
