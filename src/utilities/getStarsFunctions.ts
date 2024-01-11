export const getOverallStars = (grade: string): string => {
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
};

export const getStarsForLargeText = (ratio: number): number => {
  if (ratio >= 3) return 2;
  return 1;
};

export const getStarsForSmallText = (ratio: number): number => {
  if (ratio >= 7) return 3;
  if (ratio >= 4.5) return 2;
  return 1;
};
