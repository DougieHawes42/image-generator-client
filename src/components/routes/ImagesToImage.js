// dependencies
import { FaPlusCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";
import { ExampleImage } from "../utils/images.js";

const ImagesToImage = ({ controller }) => {
  const { imagesToImageFiles } = controller;

  const imageUpload = (
    <div className="images-to-image-image-upload">
      <label className="images-to-image-image-upload-label">
        Upload Image/s
      </label>
      <div className="images-to-image-image-upload-container">
        <div className="images-to-image-image-upload-input">
          <label htmlFor="image-upload">
            <FaPlusCircle />
          </label>

          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={controller.handleImagesToImageChange}
          />
        </div>

        <div className="images-to-image-images-preview">
          {imagesToImageFiles.map((image, index) => (
            <div
              className="images-to-image-preview-image"
              key={`${image.name}-${index}`}>
              <ExampleImage file={image} index={index} />
              <div
                className="images-to-image-preview-image-delete-button"
                type="button"
                onClick={() => {
                  controller.setImagesToImageFiles((previousFiles) =>
                    previousFiles.filter((_, i) => i !== index),
                  );
                }}>
                <RiDeleteBinLine />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <GenerateRoute
      imageUpload={imageUpload}
      title="Images to Image"
      subtitle="Enter a prompt and one or more images to generate a new image"
      name="prompt"
      value={controller.promptText}
      onChange={(e) => controller.setPromptText(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      onSubmit={controller.handleImagesToImageSubmit}
      size={controller.size}
      quality={controller.quality || "medium"}
      quantity={controller.quantity}
      setSize={controller.setSize}
      setQuality={controller.setQuality}
      setQuantity={controller.setQuantity}
      showReset={
        controller.imagesToImageFiles.length > 0 ||
        controller.promptText.length > 0
      }
      onReset={() => {
        controller.setPromptText("");
        controller.setImagesToImageFiles([]);
      }}
    />
  );
};

export default ImagesToImage;
