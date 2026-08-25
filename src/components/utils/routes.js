// styles
import "./style.scss";

// components
// utils
import { PromptInput, PromptOptionsSelector } from "./inputs.js";
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

  size,
  setSize,
  quality,
  setQuality,
  quantity,
  setQuantity,
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
      <div className="generate-route-options-selectors">
        <PromptOptionsSelector
          value={size}
          onChange={(e) => setSize(e.target.value)}
          label="size"
          items={[
            { key: 1, value: "1024x1024", text: "square" },
            { key: 2, value: "1536x1024", text: "landscape" },
            { key: 3, value: "1024x1536", text: "portrait" },
          ]}
        />
        <PromptOptionsSelector
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          label="quality"
          items={[
            { key: 1, value: "low", text: "low" },
            { key: 2, value: "medium", text: "medium" },
            { key: 3, value: "high", text: "high" },
          ]}
        />
        <PromptOptionsSelector
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          label="quantity"
          items={[
            { key: 1, value: 1, text: 1 },
            { key: 2, value: 2, text: 2 },
            { key: 3, value: 4, text: 4 },
            { key: 4, value: 8, text: 8 },
            { key: 5, value: 16, text: 16 },
          ]}
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
