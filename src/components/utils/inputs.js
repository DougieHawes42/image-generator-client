// styles
import "./style.scss";

export const PromptInput = ({ name, value, onChange, placeholder }) => {
  return (
    <textarea
      className="prompt-input"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
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
