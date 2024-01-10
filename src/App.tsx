import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ClickAwayListener from "react-click-away-listener";

export default function App() {
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#4B88EE");
  const [isTextColorPickerOpen, setIsTextColorPickerOpen] = useState(false);
  const [isBackgroundColorPickerOpen, setIsBackgroundColorPickerOpen] =
    useState(false);

  const formatColorCode = (color: string) => {
    // Add a '#' if it's not present and limit length to 7 characters (# + 6 hex digits)
    return color.startsWith("#") ? color.slice(0, 7) : "#" + color.slice(0, 6);
  };

  const handleTextColorBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTextColor(formatColorCode(event.target.value));
  };

  const handleBackgroundColorBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(formatColorCode(event.target.value));
  };

  const handleTextColorChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const newColor = formatColorCode(event.target.value);
    setTextColor(newColor);
  };

  const handleBackgroundColorChange = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    const newColor = formatColorCode(event.target.value);
    setBackgroundColor(newColor);
  };

  return (
    <div className="container">
      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Caculate the contrast ratio of text and background colors.
      </h2>
      <div className="card">
        <div className="card__rightSide">
          <div className="card__rightSideText">
            <label htmlFor="text-color">Text color</label>
            <div className="card__inputTextWrapper">
              <input
                type="text"
                name="text-color"
                id="text-color"
                value={textColor}
                onBlur={handleTextColorBlur}
                onChange={handleTextColorChange}
              />
              <button
                onClick={() => setIsTextColorPickerOpen(true)}
                style={{
                  backgroundColor: textColor,
                }}
              />
              {isTextColorPickerOpen ? (
                <ClickAwayListener
                  onClickAway={() => setIsTextColorPickerOpen(false)}
                >
                  <HexColorPicker
                    className="textColorPicker"
                    color={textColor}
                    onChange={setTextColor}
                  />
                </ClickAwayListener>
              ) : null}
            </div>
          </div>

          <div className="card__rightSideBackground">
            <label htmlFor="background-color">Background color</label>
            <div className="card__inputBackgroundWrapper">
              <input
                type="text"
                name="background-color"
                id="background-color"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
                onBlur={handleBackgroundColorBlur}
              />
              <button
                onClick={() => setIsBackgroundColorPickerOpen(true)}
                style={{
                  backgroundColor: backgroundColor,
                }}
              />
              {isBackgroundColorPickerOpen ? (
                <ClickAwayListener
                  onClickAway={() => setIsBackgroundColorPickerOpen(false)}
                >
                  <HexColorPicker
                    className="backgroundColorPicker"
                    color={backgroundColor}
                    onChange={setBackgroundColor}
                  />
                </ClickAwayListener>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className="card__leftSide"
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <h3 style={{ color: textColor }}>Food = Yummy</h3>
          <p style={{ color: textColor }}>
            Tonight's dinner special features grilled salmon with a lemon-herb
            butter sauce, served alongside roasted vegetables and a quinoa
            salad. For dessert, we have a classic apple pie topped with vanilla
            ice cream.
          </p>
        </div>
      </div>
    </div>
  );
}
