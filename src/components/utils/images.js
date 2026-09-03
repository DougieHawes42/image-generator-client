// components
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import "./style.scss";

// media
import loadingImage from "../../media/loading.svg";

export const GalleryImage = ({ isVideo, onClick, src, alt }) => {
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

        <div className="gallery-image-delete">
          <RiDeleteBin6Line />
        </div>

        <div className="gallery-image-download">
          <MdOutlineFileDownload />
        </div>
      </div>
    </div>
  );
};

export const GalleryImageLoading = () => (
  <div className="gallery-image-container">
    <img className="gallery-loader" src={loadingImage} alt="loading" />
    <p className="gallery-loader-text">loading...</p>
  </div>
);

export const ExampleImage = ({ file, index }) => (
  <img
    className="example-image"
    src={URL.createObjectURL(file)}
    alt={`Selected reference ${index + 1}`}
  />
);
