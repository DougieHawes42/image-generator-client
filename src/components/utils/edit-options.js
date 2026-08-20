import "./style.scss";

import { ImageUpload } from "./inputs.js";
import { ToggleButton } from "./buttons.js";

export const AvatarCreator = ({
  displayImage,
  fileName,
  onChange,
  onClick,
}) => {
  return (
    <div className="edit-modal-container">
      <div className="edit-modal">
        <div className="edit-modal-images">
          <ImageUpload
            displayImage={displayImage}
            label="enter facial image"
            fileName={fileName}
            onChange={onChange}
          />
        </div>
        <div className="edit-modal-footer">
          <p className="edit-modal-footer-text">select an image of a face</p>
          <p className="edit-modal-footer-text">
            the face must be yours, or that of someone you have permission
          </p>
          <ToggleButton text="close window" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
