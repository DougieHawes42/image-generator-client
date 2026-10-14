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
import dollyGhibli from "../../media/theme-examples/dollyGhibli.png";
import dollyPixar from "../../media/theme-examples/dollyPixar.png";
import dollySimpsons from "../../media/theme-examples/dollySimpsons.png";
import dollyAnime from "../../media/theme-examples/dollyAnime.png";
import dollyComicBook from "../../media/theme-examples/dollyComicBook.png";
import dollyViking from "../../media/theme-examples/dollyViking.png";
import dollyMedieval from "../../media/theme-examples/dollyMedieval.png";
import dollyVictorian from "../../media/theme-examples/dollyVictorian.png";
import dollySteampunk from "../../media/theme-examples/dollySteampunk.png";
import dollyNoir from "../../media/theme-examples/dollyNoir.png";
import dollyWatercolour from "../../media/theme-examples/dollyWatercolour.png";
import dollyHundertwasser from "../../media/theme-examples/dollyHundertwasser.png";

export const ThemeSelector = ({ onClose, setTheme, theme }) => {
  const themeOptions = [
    { key: 1, value: "NONE", text: "none", image: dollyNone, category: "none" },
    {
      key: 2,
      value: "GTA",
      text: "Grand Theft Auto",
      image: dollyGTA,
      category: "game",
    },
    {
      key: 3,
      value: "MINECRAFT",
      text: "Minecraft",
      image: dollyMinecraft,
      category: "game",
    },
    {
      key: 4,
      value: "CYBERPUNK",
      text: "Cyberpunk 2077",
      image: dollyCyberpunk2077,
      category: "game",
    },
    {
      key: 5,
      value: "RED_DEAD",
      text: "Red Dead Redemption",
      image: dollyRedDeadRedemption,
      category: "game",
    },
    {
      key: 6,
      value: "FALLOUT",
      text: "Fallout",
      image: dollyFallout,
      category: "game",
    },
    {
      key: 7,
      value: "STAR_WARS",
      text: "Star Wars",
      image: dollyStarWars,
      category: "movie",
    },
    {
      key: 8,
      value: "HARRY_POTTER",
      text: "Harry Potter",
      image: dollyHarryPotter,
      category: "movie",
    },
    {
      key: 9,
      value: "LOTR",
      text: "The Lord of the Rings",
      image: dollyLOTR,
      category: "movie",
    },
    {
      key: 10,
      value: "MATRIX",
      text: "The Matrix",
      image: dollyMatrix,
      category: "movie",
    },
    {
      key: 11,
      value: "GAME_OF_THRONES",
      text: "Game of Thrones",
      image: dollyGOT,
      category: "tv",
    },
    {
      key: 12,
      value: "PEAKY_BLINDERS",
      text: "Peaky Blinders",
      image: dollyPeakyBlinders,
      category: "tv",
    },
    {
      key: 13,
      value: "GHIBLI",
      text: "Studio Ghibli",
      image: dollyGhibli,
      category: "movie",
    },
    {
      key: 14,
      value: "PIXAR",
      text: "Pixar Animation",
      image: dollyPixar,
      category: "movie",
    },
    {
      key: 15,
      value: "SIMPSONS",
      text: "The Simpsons",
      image: dollySimpsons,
      category: "tv",
    },
    {
      key: 16,
      value: "ANIME",
      text: "Japanese Anime",
      image: dollyAnime,
      category: "movie",
    },
    {
      key: 17,
      value: "COMIC_BOOK",
      text: "Comic Book",
      image: dollyComicBook,
      category: "comic",
    },
    {
      key: 18,
      value: "VIKING",
      text: "Viking Age",
      image: dollyViking,
      category: "history",
    },
    {
      key: 19,
      value: "MEDIEVAL",
      text: "Medieval Fantasy",
      image: dollyMedieval,
      category: "history",
    },
    {
      key: 20,
      value: "VICTORIAN",
      text: "Victorian Era",
      image: dollyVictorian,
      category: "history",
    },
    {
      key: 21,
      value: "STEAMPUNK",
      text: "Steampunk",
      image: dollySteampunk,
      category: "fiction",
    },
    {
      key: 22,
      value: "NOIR",
      text: "Film Noir",
      image: dollyNoir,
      category: "movie",
    },
    {
      key: 23,
      value: "WATERCOLOUR",
      text: "Watercolour Painting",
      image: dollyWatercolour,
      category: "art",
    },
    {
      key: 24,
      value: "HUNDERTWASSER",
      text: "Hundertwasser",
      image: dollyHundertwasser,
      category: "art",
    },
  ];

  const ThemeOption = ({ name, exampleImage, value, theme }) => {
    return (
      <div
        className={`theme-option ${theme === value ? "selected" : ""}`}
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
      <div className="theme-options">
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">None</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "none")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">Art</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "art")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">Movie</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "movie")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">History</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "history")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">Fiction</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "fiction")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">Art</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "art")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
        <div className="theme-option-category">
          <h4 className="theme-option-category-title">Fiction</h4>
          <div className="theme-option-category-examples">
            {themeOptions
              .filter(({ category }) => category === "fiction")
              .map(({ key, text, image, value }) => (
                <ThemeOption
                  key={key}
                  name={text}
                  exampleImage={image}
                  theme={theme}
                  value={value}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="theme-selector-close" onClick={onClose}>
        CLOSE
      </div>
    </div>
  );
};
