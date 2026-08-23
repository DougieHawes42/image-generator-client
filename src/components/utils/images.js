// components
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import "./style.scss";

// media
import loadingImage from "../../media/loading.svg";

export const GalleryImage = ({ src, alt }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="gallery-image-container">
      <img
        className="gallery-image"
        src={`data:image/png;base64,${src}`}
        alt={alt}
      />
      <div className="gallery-image-buttons">
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
