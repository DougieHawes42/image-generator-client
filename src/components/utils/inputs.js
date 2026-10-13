// styles
import "./style.scss";

export const PromptInput = ({
  name,
  value,
  onChange,
  placeholder,
  improvePrompt,
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
      <div className="prompt-input-improve" onClick={improvePrompt}>
        {improvePromptLoading ? "PROMPT IMPROVING" : "IMPROVE PROMPT"}
      </div>
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

import dollyNone from "../../media/theme-examples/none.png";

export const ThemeSelector = ({ onClose }) => {
  const themeOptions = [
    { key: 1, value: null, text: "none", image: dollyNone },
    { key: 2, value: "GTA", text: "Grand Theft Auto" },
    { key: 3, value: "MINECRAFT", text: "Minecraft" },
    { key: 4, value: "CYBERPUNK", text: "Cyberpunk 2077" },
    { key: 5, value: "RED_DEAD", text: "Red Dead Redemption" },
    { key: 6, value: "FALLOUT", text: "Fallout" },
    { key: 7, value: "STAR_WARS", text: "Star Wars" },
    { key: 8, value: "HARRY_POTTER", text: "Harry Potter" },
    { key: 9, value: "LOTR", text: "The Lord of the Rings" },
    { key: 10, value: "MATRIX", text: "The Matrix" },
    { key: 11, value: "PEAKY_BLINDERS", text: "Peaky Blinders" },
    { key: 12, value: "GHIBLI", text: "Studio Ghibli" },
    { key: 13, value: "PIXAR", text: "Pixar Animation" },
    { key: 14, value: "SIMPSONS", text: "The Simpsons" },
    { key: 15, value: "ANIME", text: "Japanese Anime" },
    { key: 16, value: "COMIC_BOOK", text: "Comic Book" },
    { key: 17, value: "VIKING", text: "Viking Age" },
    { key: 18, value: "MEDIEVAL", text: "Medieval Fantasy" },
    { key: 19, value: "VICTORIAN", text: "Victorian Era" },
    { key: 20, value: "STEAMPUNK", text: "Steampunk" },
    { key: 21, value: "NOIR", text: "Film Noir" },
    { key: 22, value: "WATERCOLOR", text: "Watercolour Painting" },
  ];

  const ThemeOption = ({ name, exampleImage }) => {
    return (
      <div
        className="theme-option"
        style={{ backgroundImage: `url(${exampleImage})` }}>
        <h4 className="theme-option-name">{name}</h4>
      </div>
    );
  };

  return (
    <div className="theme-selector">
      <h3 className="theme-selector-title">SELECT THEME</h3>
      <div className="theme-options-grid">
        {themeOptions.map(({ key, text, image }) => (
          <ThemeOption key={key} name={text} exampleImage={image} />
        ))}
      </div>
      <div className="theme-selector-close" onClick={onClose}>
        CLOSE
      </div>
    </div>
  );
};
