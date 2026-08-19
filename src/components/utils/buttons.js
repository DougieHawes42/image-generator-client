import "./style.scss";

export const SubmitButton = ({ onClick, text }) => (
  <button className="submit-button" onClick={onClick}>
    {text}
  </button>
);

export const ToggleButton = ({ onClick, text }) => (
  <button className="toggle-button" onClick={onClick}>
    {text}
  </button>
);
