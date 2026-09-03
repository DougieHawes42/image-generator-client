import "./style.scss";

export const SubmitButton = ({ text, disabled, onClick }) => {
  return (
    <div className="submit-button" disabled={disabled} onClick={onClick}>
      {text}
    </div>
  );
};
