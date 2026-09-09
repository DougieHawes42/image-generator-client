// styles
import "./style.scss";

export const PromptInput = ({
  name,
  value,
  onChange,
  placeholder,
  improvePromptLoading,
  onKeyDown,
}) => {
  return (
    <div className="prompt-input-container">
      <textarea
        className="prompt-input"
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      {improvePromptLoading && (
        <div className="prompt-input-loading">Loading...</div>
      )}
    </div>
  );
};

export const PromptOptionsSelector = ({ value, onChange, label, items }) => (
  <div className="prompt-options-selector-container">
    <label className="prompt-options-selector-label">{label}</label>
    <select
      className="prompt-options-selector"
      value={value}
      onChange={onChange}>
      {items.map((i) => (
        <option key={i.key} value={i.value}>
          {i.text}
        </option>
      ))}
    </select>
  </div>
);
