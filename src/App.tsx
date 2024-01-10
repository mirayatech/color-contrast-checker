import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function App() {
  const [textColor, setTextColor] = useState("#333");
  const [backgroundColor, setBackgroundColor] = useState("#333");

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
    <div>
      <div>
        <label htmlFor="text-color">Text color</label>
        <div>
          <input
            type="text"
            name="text-color"
            id="text-color"
            value={textColor}
            onBlur={handleTextColorBlur}
            onChange={handleTextColorChange}
          />{" "}
          <HexColorPicker color={textColor} onChange={setTextColor} />
        </div>
      </div>

      <div>
        <label htmlFor="background-color">Background color</label>
        <div>
          <input
            type="text"
            name="background-color"
            id="background-color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            onBlur={handleBackgroundColorBlur}
          />

          <HexColorPicker
            color={backgroundColor}
            onChange={setBackgroundColor}
          />
        </div>
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: backgroundColor,
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: textColor }}>
          Hello world! I'm Miraya, trying to create a color contrast checker
        </p>
      </div>
    </div>
  );
}
