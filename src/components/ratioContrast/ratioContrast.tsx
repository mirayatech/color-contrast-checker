import { GoStarFill, GoStar } from "react-icons/go";
import {
  getContrastGrade,
  getContrastRatio,
  getOverallStars,
  getStarsForLargeText,
  getStarsForSmallText,
} from "../../utilities";
import "./ratioContrast.css";

type RatioContrastProps = {
  textColor: string;
  backgroundColor: string;
};

export function RatioContrast({
  textColor,
  backgroundColor,
}: RatioContrastProps) {
  const contrastRatio = getContrastRatio(textColor, backgroundColor);
  const largeTextStars = getStarsForLargeText(contrastRatio);
  const smallTextStars = getStarsForSmallText(contrastRatio);
  const contrastGrade = getContrastGrade(contrastRatio);

  const overallStars = getOverallStars(
    contrastGrade,
    largeTextStars,
    smallTextStars
  );

  const renderStars = (totalStars: number, filledStars: number) => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(i < filledStars ? <GoStarFill key={i} /> : <GoStar key={i} />);
    }
    return stars;
  };

  const getRatioColorBackground = () => {
    if (contrastGrade === "Poor" || contrastGrade === "Very Poor") {
      return "poor-contrast";
    } else if (contrastGrade === "Good") {
      return "good-contrast";
    } else if (contrastGrade === "Very Good" || contrastGrade === "Super") {
      return "very-good-contrast";
    }
  };

  const getSmallTextColorBackground = () => {
    if (smallTextStars === 3) {
      return "very-good-contrast";
    } else if (smallTextStars === 2) {
      return "good-contrast";
    } else if (smallTextStars === 1) {
      return "poor-contrast";
    }
    return "";
  };

  const getLargeTextColorBackground = () => {
    if (largeTextStars === 3) {
      return "very-good-contrast";
    } else if (largeTextStars === 2) {
      return "good-contrast";
    } else if (largeTextStars === 1) {
      return "poor-contrast";
    }
    return "";
  };

  const smallTextColorShades = getSmallTextColorBackground();
  const largeTextColorShades = getLargeTextColorBackground();
  const ratioColorShades = getRatioColorBackground();
  return (
    <div className="contrast-section-wrapper">
      <span className="contrast-heading">Contrast</span>
      <div className="contrast-ratio-display">
        <div className={`contrast-info ${ratioColorShades}`}>
          <span className="ratio-value">{contrastRatio.toFixed(2)}</span>
          <div className="ratio-value-wrapper">
            <span className="grade-display">{contrastGrade}</span>
            <span className="stars-display">
              {renderStars(5, overallStars.length)}
            </span>
          </div>
        </div>

        <div className="text-rating-section">
          <div className={`small-text-rating ${smallTextColorShades}`}>
            Small text
            <span className="star-symbol">
              {renderStars(3, smallTextStars)}
            </span>
          </div>
          <div className={`large-text-rating ${largeTextColorShades}`}>
            Large text
            <span className="star-symbol">
              {renderStars(3, largeTextStars)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
