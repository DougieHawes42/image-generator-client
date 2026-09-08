// components
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

// styles
import "./style.scss";

// media
import loadingImage from "../../media/loading.svg";

export const GalleryImage = ({ controller, isVideo, onClick, src, alt }) => {
  const [liked, setLiked] = useState(false);

  const imageSrc = src?.src ?? src;

  return (
    <div className="gallery-image-container">
      {isVideo ? (
        <video className="gallery-image" src={imageSrc} />
      ) : (
        <img
          className="gallery-image"
          src={`data:image/png;base64,${imageSrc}`}
          alt={alt}
        />
      )}

      <div className="gallery-image-buttons" onClick={onClick}>
        <div
          className={`gallery-image-like ${liked ? "liked" : ""}`}
          onClick={() => {
            setLiked(!liked);
          }}>
          <CiHeart />
        </div>
        <div
          className="gallery-image-download"
          onClick={controller.handleDownload}>
          <MdOutlineFileDownload />
        </div>
      </div>
    </div>
  );
};

export const GalleryImageLoading = () => (
  <div className="gallery-image-loader">
    <img
      className="gallery-image-loader-icon"
      src={loadingImage}
      alt="loading"
    />
    <p className="gallery-image-loader-text">loading...</p>
  </div>
);

export const ExampleImage = ({ file, index }) => (
  <img
    className="example-image"
    src={URL.createObjectURL(file)}
    alt={`Selected reference ${index + 1}`}
  />
);
