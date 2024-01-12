import { useEffect, useState } from "react";
import "./cardRightSide.css";
import { ContentItemType, getRandomTextPlaceholder } from "../../utilities";

type CardRightSideProps = {
  textColor: string;
  backgroundColor: string;
};

export function CardRightSide({
  textColor,
  backgroundColor,
}: CardRightSideProps) {
  const [contentItem, setContentItem] = useState<ContentItemType>({
    title: "",
    text: "",
  });

  useEffect(() => {
    setContentItem(getRandomTextPlaceholder());
  }, []);

  return (
    <div className="cardRightSide" style={{ backgroundColor: backgroundColor }}>
      <h3 style={{ color: textColor }}>{contentItem.title}</h3>
      <p style={{ color: textColor }}>{contentItem.text}</p>
    </div>
  );
}
