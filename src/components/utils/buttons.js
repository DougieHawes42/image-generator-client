import "./style.scss";

export const SubmitButton = ({ onClick, text }) => (
  <button className="submit-button" onClick={onClick}>
    {text}
  </button>
);

export const ToggleButton = ({ onClick, text }) => (
  <div className="toggle-button" onClick={onClick}>
    {text}
  </div>
);

export const OptionButton = ({ onClick, text }) => (
  <div className="option-button" onClick={onClick}>
    {text}
  </div>
);
