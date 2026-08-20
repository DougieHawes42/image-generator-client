import { useState } from "react";

import helpers from "./helpers/index.js";

import "./style.scss";

import Error from "./components/layout/Error.js";
import Loading from "./components/layout/Loading.js";

import {
  SubmitButton,
  ToggleButton,
  OptionButton,
} from "./components/utils/buttons.js";
import {
  ImageUpload,
  PromptText,
  PromptOptionsSelector,
} from "./components/utils/inputs.js";
import { ImageModal } from "./components/utils/modals.js";
import { AvatarCreator } from "./components/utils/edit-options.js";

const App = () => {
  const [showEditOptions, setShowEditOptions] = useState(false);

  const {
    promptText,
    setPromptText,
    images,
    setImages,
    loading,
    setLoading,
    error,
    setError,
    size,
    setSize,
    quality,
    setQuality,
    quantity,
    setQuantity,
    selectedImage,
    setSelectedImage,
    selectedIndex,
    setSelectedIndex,
    initialImageFile,
    setInitialImageFile,
    initialImagePreview,
    setInitialImagePreview,
    editPrompt,
    setEditPrompt,
    showImageUpload,
    setShowImageUpload,
    showAvatarCreator,
    setShowAvatarCreator,

    avatarInitialImageFile,
    avatarInitialImagePreview,
    handleAvatarInitialImageChange,

    handleAvatarSubmit,
    handleReset,
    handleSubmit,
    handleDownload,
    handleImageScroll,
    handleInitialImageChange,
  } = helpers();

  return (
    <div className="app">
      <h1 className="title">Klimpt-E</h1>
      <div className="prompt-dashboard">
        <PromptText
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          placeholder="enter image prompt..."
        />
        <div className="prompt-options-selectors">
          <PromptOptionsSelector
            value={size}
            onChange={(e) => setSize(e.target.value)}
            label="size"
            items={[
              { key: 1, value: "1024x1024", text: "square" },
              { key: 2, value: "1536x1536", text: "landscape" },
              { key: 3, value: "1024x1536", text: "portrait" },
            ]}
          />
          <PromptOptionsSelector
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            label="quality"
            items={[
              { key: 1, value: "low", text: "low" },
              { key: 2, value: "medium", text: "medium" },
              { key: 3, value: "high", text: "high" },
            ]}
          />
          <PromptOptionsSelector
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            label="quantity"
            items={[
              { key: 1, value: 1, text: 1 },
              { key: 2, value: 2, text: 2 },
              { key: 3, value: 4, text: 4 },
              { key: 4, value: 8, text: 8 },
              { key: 5, value: 16, text: 16 },
            ]}
          />
        </div>
        <ToggleButton
          onClick={() => setShowEditOptions(!showEditOptions)}
          text={showEditOptions ? "close menu" : "image edit menu"}
        />
        <div className="edit-options-container">
          {showEditOptions && (
            <div className="edit-options">
              <OptionButton
                text="fantasy avatar creator"
                onClick={() => setShowAvatarCreator(true)}
              />
              <OptionButton text="merge two images" />
            </div>
          )}
        </div>
        <SubmitButton onClick={handleSubmit} text="submit" />
        <SubmitButton onClick={handleAvatarSubmit} text="create avatar" />
        {initialImageFile && (
          <div className="preview-image-container">
            <label className="preview-image-label">initial file</label>
            <img className="preview-image" src={initialImagePreview} alt="" />
          </div>
        )}
        {avatarInitialImageFile && (
          <div className="preview-image-container">
            <label className="preview-image-label">initial file</label>
            <img
              className="preview-image"
              src={avatarInitialImagePreview}
              alt=""
            />
          </div>
        )}
        {promptText.length > 0 && (
          <ToggleButton onClick={handleReset} text="reset" />
        )}
      </div>
      {loading && <Loading qty={quantity} />}
      {error && <Error message={error} />}
      <div className="gallery">
        {images &&
          images.map((image, index) => (
            <img
              className="gallery-item"
              key={index}
              src={`data:image/png;base64,${image}`}
              onClick={() => {
                setSelectedImage(`data:image/png;base64,${image}`);
                setSelectedIndex(index);
              }}
              alt={promptText}
            />
          ))}
      </div>
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          scrollLeft={() => handleImageScroll("left")}
          selectedIndex={selectedIndex}
          images={images}
          scrollRight={() => handleImageScroll("right")}
          clickDownload={handleDownload}
          clickClose={() => setSelectedImage(null)}
        />
      )}
      {showAvatarCreator && (
        <AvatarCreator
          displayImage={avatarInitialImagePreview}
          fileName="avatarInitialImage"
          onChange={handleAvatarInitialImageChange}
          onClick={() => setShowAvatarCreator(false)}
        />
      )}
    </div>
  );
};

export default App;
