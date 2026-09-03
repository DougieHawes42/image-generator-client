// dependencies
import { CiHeart } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import "./style.scss";

const ImageModal = ({ controller }) => {
  const selectedImage = controller.images[controller.selectedImageIndex]?.src;

  const isVideo =
    typeof selectedImage === "string" && selectedImage.includes(".mp4");

  return (
    <div
      className="image-modal-container"
      onClick={() => controller.setShowModal(false)}>
      <div className="image-modal" onClick={(e) => e.stopPropagation()}>
        <div className="image-modal-image-container">
          {isVideo ? (
            <video
              className="image-modal-image"
              src={selectedImage}
              controls
              autoPlay
            />
          ) : (
            <img
              className="image-modal-image"
              src={`data:image/png;base64,${selectedImage}`}
              alt=""
            />
          )}
          <div className="image-modal-buttons">
            <RiDeleteBin6Line className="image-modal-button delete" />
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
            <CiHeart className="image-modal-button like" />
            <div className="image-modal-button number">
              {controller.selectedImageIndex + 1} / {controller.images.length}
            </div>
            <MdOutlineFileDownload
              className="image-modal-button download"
              onClick={() => controller.handleDownload()}
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
            <FaTimes
              className="image-modal-button close"
              onClick={() => controller.setShowModal(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
