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

import dollyNone from "../../media/theme-examples/dollyNone.png";
import dollyGTA from "../../media/theme-examples/dollyGTA.png";
import dollyMinecraft from "../../media/theme-examples/dollyMinecraft.png";
import dollyCyberpunk2077 from "../../media/theme-examples/dollyCyberpunk2077.png";
import dollyRedDeadRedemption from "../../media/theme-examples/dollyRedDeadRedemption.png";
import dollyFallout from "../../media/theme-examples/dollyFallout.png";
import dollyStarWars from "../../media/theme-examples/dollyStarWars.png";
import dollyHarryPotter from "../../media/theme-examples/dollyHarryPotter.png";
import dollyLOTR from "../../media/theme-examples/dollyLOTR.png";
import dollyMatrix from "../../media/theme-examples/dollyMatrix.png";
import dollyGOT from "../../media/theme-examples/dollyGOT.png";
import dollyPeakyBlinders from "../../media/theme-examples/dollyPeakyBlinders.png";
// import dollyGhibli from "../../media/theme-examples/dollyGhibli.png";
// import dollyPixar from "../../media/theme-examples/dollyPixar.png";
// import dollySimpsons from "../../media/theme-examples/dollySimpsons.png";
// import dollyAnime from "../../media/theme-examples/dollyAnime.png";
// import dollyComicBook from "../../media/theme-examples/dollyComicBook.png";
// import dollyViking from "../../media/theme-examples/dollyViking.png";
// import dollyMedieval from "../../media/theme-examples/dollyMedieval.png";
// import dollyVictorian from "../../media/theme-examples/dollyVictorian.png";
// import dollySteampunk from "../../media/theme-examples/dollySteampunk.png";
// import dollyNoir from "../../media/theme-examples/dollyNoir.png";
// import dollyWatercolor from "../../media/theme-examples/dollyWatercolor.png";

export const ThemeSelector = ({ onClose, setTheme }) => {
  const themeOptions = [
    { key: 1, value: "NONE", text: "none", image: dollyNone },
    { key: 2, value: "GTA", text: "Grand Theft Auto", image: dollyGTA },
    { key: 3, value: "MINECRAFT", text: "Minecraft", image: dollyMinecraft },
    {
      key: 4,
      value: "CYBERPUNK",
      text: "Cyberpunk 2077",
      image: dollyCyberpunk2077,
    },
    {
      key: 5,
      value: "RED_DEAD",
      text: "Red Dead Redemption",
      image: dollyRedDeadRedemption,
    },
    { key: 6, value: "FALLOUT", text: "Fallout", image: dollyFallout },
    { key: 7, value: "STAR_WARS", text: "Star Wars", image: dollyStarWars },
    {
      key: 8,
      value: "HARRY_POTTER",
      text: "Harry Potter",
      image: dollyHarryPotter,
    },
    { key: 9, value: "LOTR", text: "The Lord of the Rings", image: dollyLOTR },
    { key: 10, value: "MATRIX", text: "The Matrix", image: dollyMatrix },
    {
      key: 11,
      value: "GAME_OF_THRONES",
      text: "Game of Thrones",
      image: dollyGOT,
    },
    {
      key: 12,
      value: "PEAKY_BLINDERS",
      text: "Peaky Blinders",
      image: dollyPeakyBlinders,
    },
    { key: 13, value: "GHIBLI", text: "Studio Ghibli", image: null },
    { key: 14, value: "PIXAR", text: "Pixar Animation", image: null },
    { key: 15, value: "SIMPSONS", text: "The Simpsons", image: null },
    { key: 16, value: "ANIME", text: "Japanese Anime", image: null },
    { key: 17, value: "COMIC_BOOK", text: "Comic Book", image: null },
    { key: 18, value: "VIKING", text: "Viking Age", image: null },
    { key: 19, value: "MEDIEVAL", text: "Medieval Fantasy", image: null },
    { key: 20, value: "VICTORIAN", text: "Victorian Era", image: null },
    { key: 21, value: "STEAMPUNK", text: "Steampunk", image: null },
    { key: 22, value: "NOIR", text: "Film Noir", image: null },
    { key: 23, value: "WATERCOLOR", text: "Watercolour Painting", image: null },
  ];

  const ThemeOption = ({ name, exampleImage, value }) => {
    return (
      <div
        className="theme-option"
        style={{ backgroundImage: `url(${exampleImage})` }}
        onClick={() => {
          setTheme(value);
        }}>
        <h4 className="theme-option-name">{name}</h4>
      </div>
    );
  };

  return (
    <div className="theme-selector">
      <h3 className="theme-selector-title">SELECT THEME</h3>
      <div className="theme-options-grid">
        {themeOptions.map(({ key, text, image, value }) => (
          <ThemeOption
            key={key}
            name={text}
            exampleImage={image}
            value={value}
          />
        ))}
      </div>
      <div className="theme-selector-close" onClick={onClose}>
        CLOSE
      </div>
    </div>
  );
};
