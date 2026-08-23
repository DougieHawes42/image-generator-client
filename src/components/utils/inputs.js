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
