import "./cardRightSide.css";

type CardRightSideProps = {
  textColor: string;
  backgroundColor: string;
};

export function CardRightSide({
  textColor,
  backgroundColor,
}: CardRightSideProps) {
  return (
    <div
      className="cardRightSide"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h3 style={{ color: textColor }}>Food = Yummy</h3>
      <p style={{ color: textColor }}>
        Tonight's dinner special features grilled salmon with a lemon-herb
        butter sauce, served alongside roasted vegetables and a quinoa salad.
        For dessert, we have a classic apple pie topped with vanilla ice cream.
      </p>
    </div>
  );
}
