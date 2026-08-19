import "./style.scss";

export const ImageUpload = ({ displayImage, label, fileName, onChange }) => (
  <div className="image-upload">
    <div className="image-display-container">
      {displayImage && (
        <img className="image-display" src={displayImage} alt="" />
      )}
    </div>
    <label className="image-input-label" htmlFor={fileName}>
      {label}
    </label>
    <input
      className="image-input"
      type="file"
      name={fileName}
      id={fileName}
      accept="image/*"
      onChange={onChange}
    />
  </div>
);

export const PromptText = ({ value, onChange, placeholder }) => (
  <textarea
    className="prompt-text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export const PromptOptionsSelector = ({ value, onChange, items }) => (
  <select className="prompt-options-selector" value={value} onChange={onChange}>
    {items.map((i) => (
      <option key={i.key} value={i.value}>
        {i.text}
      </option>
    ))}
  </select>
);
