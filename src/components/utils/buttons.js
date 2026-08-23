import "./style.scss";

export const SubmitButton = ({ text, onClick }) => {
  return (
    <div className="submit-button" onClick={onClick}>
      {text}
    </div>
  );
};
