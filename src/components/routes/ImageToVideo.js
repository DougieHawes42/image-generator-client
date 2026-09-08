// dependencies
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

// styles
import "./style.scss";

// components
// utils
import { GenerateRoute } from "../utils/routes.js";

const ImageToVideo = ({ controller }) => {
  const imageUpload = (
    <div className="image-to-video-image-upload">
      <label className="image-to-video-image-upload-label">
        Upload Image/s
      </label>
      <div className="image-to-video-image-upload-container">
        <div className="image-to-video-image-upload-input">
          {controller.imageToVideoStartFile && (
            <img
              className="image-to-video-image-preview-image"
              src={URL.createObjectURL(controller.imageToVideoStartFile)}
              alt="Start preview"
            />
          )}
          <div
            className={`image-to-video-image-upload-input-text ${controller.imageToVideoStartFile ? "hidden" : ""}`}>
            <label
              className="image-to-video-upload-icon"
              htmlFor="image-to-video-start-upload">
              <FaPlusCircle />
            </label>
            <div className="image-to-video-image-preview-text">
              Enter Start Image
            </div>
            <input
              id="image-to-video-start-upload"
              type="file"
              accept="image/*"
              onChange={(e) => controller.handleImageToVideoChange(e, "start")}
            />
          </div>
          <h3 className="image-to-video-image-upload-input-title">start</h3>
        </div>
        <div className="image-to-video-image-upload-input">
          {controller.imageToVideoEndFile && (
            <img
              className="image-to-video-image-preview-image"
              src={URL.createObjectURL(controller.imageToVideoEndFile)}
              alt="End preview"
            />
          )}
          <div
            className={`image-to-video-image-upload-input-text ${controller.imageToVideoEndFile ? "hidden" : ""}`}>
            <label htmlFor="image-to-video-end-upload">
              <FaPlusCircle />
            </label>
            <div className="image-to-video-image-preview-text">
              Enter End Image
            </div>
            <input
              id="image-to-video-end-upload"
              type="file"
              accept="image/*"
              onChange={(e) => controller.handleImageToVideoChange(e, "end")}
            />
          </div>
          <h3 className="image-to-video-image-upload-input-title end">end</h3>
        </div>
      </div>
    </div>
  );

  return (
    <GenerateRoute
      imageUpload={imageUpload}
      title="Image to Video"
      subtitle="Enter an image and a prompt to generate a video"
      name="prompt"
      onChange={(e) => controller.setPromptText(e.target.value)}
      placeholder="Type your prompt here..."
      buttonText="Generate"
      value={controller.promptText}
      onSubmit={controller.handleImageToVideoSubmit}
      size="1024x1024"
      quality={controller.quality || "medium"}
      quantity={1}
      setQuality={controller.setQuality}
      showSize={false}
      showQuality={false}
      showQuantity={false}
    />
  );
};

export default ImageToVideo;
