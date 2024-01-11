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

  function getContrastRatio(foreground: string, background: string): number {
    const lum1 = getLuminance(foreground);
    const lum2 = getLuminance(background);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }

  function getLuminance(hex: string): number {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const sRGB = [r, g, b].map((value) => {
      value /= 255;
      return value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  }

  function getContrastGrade(ratio: number): string {
    if (ratio >= 7) return "Super";
    if (ratio >= 4.5) return "Very Good";
    if (ratio >= 3) return "Good";
    if (ratio >= 2) return "Poor";
    return "Very Poor";
  }

  function getOverallStars(grade: string): string {
    switch (grade) {
      case "Super":
        return "★★★★★";
      case "Very Good":
        return "★★★★";
      case "Good":
        return "★★★";
      case "Poor":
        return "★★";
      case "Very Poor":
        return "★★";
      default:
        return "";
    }
  }

  function getStarsForLargeText(ratio: number): number {
    if (ratio >= 4.5) return 3;
    if (ratio >= 3) return 2;
    return 1;
  }

  function getStarsForSmallText(ratio: number): number {
    if (ratio >= 7) return 3;
    if (ratio >= 4.5) return 2;
    return 1;
  }

  const contrastRatio = getContrastRatio(textColor, backgroundColor);
  const largeTextStars = getStarsForLargeText(contrastRatio);
  const smallTextStars = getStarsForSmallText(contrastRatio);

  const contrastGrade = getContrastGrade(contrastRatio);
  const overallStars = getOverallStars(contrastGrade);

  return (
    <div className="container">
      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Caculate the contrast ratio of text and background colors.
      </h2>
      <div className="card">
        <div className="card__rightSide">
          <div className="card__rightSideWrapper">
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
          <div className="ratioWrapper">
            <span className="ratio">{contrastRatio.toFixed(2)}</span>
            <span>{contrastGrade}</span>
            <span>{overallStars}</span>
            <div>
              Small text <span>Stars: {"★".repeat(smallTextStars)}</span>
            </div>
            <div>
              Large text <span>Stars: {"★".repeat(largeTextStars)}</span>
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
