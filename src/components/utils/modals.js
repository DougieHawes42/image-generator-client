import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./style.scss";

export const ImageModal = ({
  selectedImage,
  scrollLeft,
  selectedIndex,
  images,
  scrollRight,
  clickDownload,
  clickClose,
}) => (
  <div className="image-modal">
    <img className="modal-image" src={selectedImage} />
    <div className="modal-chevrons-container">
      <FaAngleLeft className="modal-chevron" onClick={scrollLeft} />
      <div className="modal-image-count">
        {selectedIndex + 1}/{images.length}
      </div>
      <FaAngleRight className="modal-chevron" onClick={scrollRight} />
    </div>
    <div className="modal-buttons-container">
      <button className="modal-button" onClick={clickDownload}>
        DOWNLOAD
      </button>
      <button className="modal-button" onClick={clickClose}>
        CLOSE
      </button>
    </div>
  </div>
);
