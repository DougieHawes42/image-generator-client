// dependencies
import { GiPaintBucket, GiPaintRoller } from "react-icons/gi";

// styles
import "./style.scss";

// components
// utils
import { GalleryImage, GalleryImageLoading } from "../utils/images.js";
const Gallery = ({ controller }) => {
  const { images, loading, setShowModal, setSelectedImageIndex } = controller;

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h3 className="gallery-title">gallery</h3>
        {images.length > 0 && (
          <p className="gallery-subtitle">choose items to save and download</p>
        )}
      </div>
      {images.length === 0 && !loading && (
        <div className="gallery-empty">
          <GiPaintBucket className="bucket" />
          <GiPaintRoller className="roller" />
          <p className="gallery-empty-text">No images to display</p>
        </div>
      )}
      <div className="gallery-images">
        {loading && <GalleryImageLoading />}
        {images.length > 0 &&
          [...images].reverse().map((image, index) => (
            <GalleryImage
              onClick={() => {
                setShowModal(true);
                setSelectedImageIndex(images.length - 1 - index);
              }}
              controller={controller}
              key={index}
              src={image}
              isVideo={image?.src?.includes(".mp4")}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
