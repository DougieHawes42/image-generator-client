// dependencies
import { CiHeart } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import "./style.scss";

const ImageModal = ({ controller }) => {
  return (
    <div
      className="image-modal-container"
      onClick={() => controller.setShowModal(false)}>
      <div className="image-modal" onClick={(e) => e.stopPropagation()}>
        <div className="image-modal-image-container">
          <img
            className="image-modal-image"
            src={`data:image/png;base64,${controller.images[controller.selectedImageIndex]}`}
            alt=""
          />
          <div className="image-modal-buttons">
            <RiDeleteBin6Line className="image-modal-button delete" />
            <CiHeart className="image-modal-button like" />
            <MdOutlineFileDownload className="image-modal-button download" />
            <FaTimes
              className="image-modal-button close"
              onClick={() => controller.setShowModal(false)}
            />
            <FaChevronLeft
              className="image-modal-button left"
              onClick={() =>
                controller.setSelectedImageIndex(
                  (controller.selectedImageIndex -
                    1 +
                    controller.images.length) %
                    controller.images.length,
                )
              }
            />
            <FaChevronRight
              className="image-modal-button right"
              onClick={() =>
                controller.setSelectedImageIndex(
                  (controller.selectedImageIndex + 1) %
                    controller.images.length,
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
