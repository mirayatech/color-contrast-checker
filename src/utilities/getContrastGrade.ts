export const getContrastGrade = (ratio: number): string => {
  if (ratio >= 7) return "Super";
  if (ratio >= 4.5) return "Very Good";
  if (ratio >= 3) return "Good";
  if (ratio >= 2) return "Poor";
  return "Very Poor";
};
