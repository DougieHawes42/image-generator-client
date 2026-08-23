// dependencies
import { GiPaintBucket, GiPaintRoller } from "react-icons/gi";

// styles
import "./style.scss";

// components
// utils
import { GalleryImage } from "../utils/images.js";
// import { GalleryImageLoading } from "../utils/images.js";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      <div className="gallery-header">
        <h3 className="gallery-title">gallery</h3>
        <p className="gallery-subtitle">choose items to save and download</p>
      </div>
      {images.length === 0 ? (
        <div className="gallery-empty">
          <GiPaintBucket className="bucket" />
          <GiPaintRoller className="roller" />
          <p className="gallery-empty-text">No images to display</p>
        </div>
      ) : (
        images.length > 0 && (
          <div className="gallery-images">
            {images.map((image, index) => (
              <GalleryImage key={index} src={image} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Gallery;
