// dependencies
import { CiHeart } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import "./style.scss";

const ImageModal = ({ controller }) => {
  const selectedImage = controller.images[controller.selectedImageIndex];

  const isVideo = typeof selectedImage !== "string";

  const reversedImages = [...controller.images].reverse();

  return (
    <div
      className="image-modal-container"
      onClick={() => controller.setShowModal(false)}>
      <div className="image-modal" onClick={(e) => e.stopPropagation()}>
        <div className="image-modal-image-container">
          {isVideo ? (
            <video
              className="image-modal-image"
              src={selectedImage.src}
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
            <FaChevronLeft
              className="image-modal-button left"
              onClick={() =>
                controller.setSelectedImageIndex(
                  (controller.selectedImageIndex + 1) % reversedImages.length,
                )
              }
            />

            <CiHeart className="image-modal-button like" />

            <div className="image-modal-button number">
              {controller.selectedImageIndex + 1} / {reversedImages.length}
            </div>

            <MdOutlineFileDownload
              className="image-modal-button download"
              onClick={controller.handleDownload}
            />

            <FaChevronRight
              className="image-modal-button right"
              onClick={() =>
                controller.setSelectedImageIndex(
                  (controller.selectedImageIndex - 1 + reversedImages.length) %
                    reversedImages.length,
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
