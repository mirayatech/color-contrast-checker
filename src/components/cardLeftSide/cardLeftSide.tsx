import { useState } from "react";
import ColorPicker from "../colorPicker/colorPicker";
import "./cardLeftSide.css";
import { formatColorCode } from "../../utilities";
import { RatioContrast } from "..";

type CardLeftSideProps = {
  textColor: string;
  setTextColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
};

export function CardLeftSide({
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
}: CardLeftSideProps) {
  const [isTextColorPickerOpen, setIsTextColorPickerOpen] = useState(false);
  const [isBackgroundColorPickerOpen, setIsBackgroundColorPickerOpen] =
    useState(false);

  const handleColorChange = (setColor: (color: string) => void) => {
    return (event: React.FocusEvent<HTMLInputElement>) => {
      setColor(formatColorCode(event.target.value));
    };
  };

  const handleTextColorBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTextColor(formatColorCode(event.target.value));
  };

  const handleBackgroundColorBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(formatColorCode(event.target.value));
  };

  const handleTextColorChange = handleColorChange(setTextColor);
  const handleBackgroundColorChange = handleColorChange(setBackgroundColor);

  return (
    <div className="card-container">
      <div className="container-wrapper">
        <div className="text-color-section">
          <label htmlFor="text-color">Text color</label>
          <div className="input-wrapper">
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
              style={{ backgroundColor: textColor }}
            />
            {isTextColorPickerOpen && (
              <ColorPicker
                setIsOpen={setIsTextColorPickerOpen}
                color={textColor}
                setColor={setTextColor}
              />
            )}
          </div>
        </div>

        <div className="background-color-section">
          <label htmlFor="background-color">Background color</label>
          <div className="input-wrapper">
            <input
              type="text"
              name="background-color"
              id="background-color"
              value={backgroundColor}
              onBlur={handleBackgroundColorBlur}
              onChange={handleBackgroundColorChange}
            />
            <button
              onClick={() => setIsBackgroundColorPickerOpen(true)}
              style={{ backgroundColor: backgroundColor }}
            />
            {isBackgroundColorPickerOpen && (
              <ColorPicker
                setIsOpen={setIsBackgroundColorPickerOpen}
                color={backgroundColor}
                setColor={setBackgroundColor}
              />
            )}
          </div>
        </div>
      </div>

      <RatioContrast textColor={textColor} backgroundColor={backgroundColor} />
    </div>
  );
}
