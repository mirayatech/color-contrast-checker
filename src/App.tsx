import { useState } from "react";

import { CardRightSide, CardLeftSide } from "./components";

export default function App() {
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#4B88EE");

  return (
    <div className="container">
      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Caculate the contrast ratio of text and background colors.
      </h2>
      <div className="card">
        <CardLeftSide
          textColor={textColor}
          setTextColor={setTextColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />

        <CardRightSide
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
}
