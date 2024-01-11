export const formatColorCode = (color: string) => {
  return color.startsWith("#") ? color.slice(0, 7) : "#" + color.slice(0, 6);
};
