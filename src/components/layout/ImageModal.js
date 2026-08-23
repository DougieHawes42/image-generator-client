// dependencies
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// styles
import "./style.scss";

// components
// utils
import { SubmitButton } from "../utils/buttons.js";

const ImageModal = ({ image, onClose, onDownload }) => {
  return (
    <div className="image-modal-container" onClick={onClose}>
      <div className="image-modal" onClick={(e) => e.stopPropagation()}>
        <div className="image-modal-image-container">
          <div className="image-modal-chevrons">
            <FaChevronLeft className="image-modal-chevron left" />
            <FaChevronRight className="image-modal-chevron right" />
          </div>
        </div>
        <div className="image-modal-footer">
          <SubmitButton text="download" onClick={onDownload} />
          <p className="image-modal-close" onClick={onClose}>
            close
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
