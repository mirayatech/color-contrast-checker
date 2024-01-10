import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function App() {
  const [textColor, setTextColor] = useState("#333");
  const [backgroundColor, setBackgroundColor] = useState("#333");

  return (
    <div>
      <input
        type="text"
        name="text-color"
        id="text-color"
        value={textColor}
        onChange={() => setTextColor(textColor)}
      />

      <input
        type="text"
        name="background-color"
        id="background-color"
        value={backgroundColor}
        onChange={() => setBackgroundColor(backgroundColor)}
      />

      <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
      <HexColorPicker color={textColor} onChange={setTextColor} />

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
