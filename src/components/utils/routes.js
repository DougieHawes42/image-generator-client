// styles
import "./style.scss";

// components
// utils
import { PromptInput } from "./inputs.js";
import { SubmitButton } from "./buttons.js";

export const GenerateRoute = ({
  title,
  subtitle,
  name,
  value,
  onChange,
  placeholder,
  buttonText,
  resetVisible,
  onClickReset,
  onSubmit,
}) => {
  return (
    <div className="generate-route">
      <div className="generate-route-header">
        <h2 className="generate-route-title">{title}</h2>
        <p className="generate-route-subtitle">{subtitle}</p>
      </div>
      <div className="generate-route-inputs">
        <PromptInput
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      <div className="generate-route-submit-container">
        <SubmitButton onClick={onSubmit} text={buttonText} />
        {resetVisible && (
          <div className="generate-route-reset-button" onClick={onClickReset}>
            RESET
          </div>
        )}
      </div>
    </div>
  );
};
