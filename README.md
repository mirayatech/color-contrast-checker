# 🎨 Color Contrast Checker ♿

I've created a color contrast checker using React and TypeScript. The purpose of it was to understand how contrast ratios are calculated and to learn more about color luminance, which measures color brightness. I followed the [Venngage accessibility guidelines](https://venngage.com/blog/accessible) while building this project, and I got inspiration from the UI at [coolors.co](https://coolors.co/).

## 📦 Technologies

- `Vite`
- `React.js`
- `TypeScript`
- `CSS`

## 💭 The Idea

The main idea behind this project was my desire to gain a deeper understanding of how contrast ratios work by exploring luminance, which quantifies color brightness.

Luminance is calculated by converting a color from its hexadecimal representation to RGB values and then applying the sRGB gamma correction.

By the way, sRGB gamma correction means adjusting colors on your screen to look right. It's like making sure the colors on your screen match the real world, so they don't appear too bright or too dark.

The [formula](https://stackoverflow-com.translate.goog/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color?_x_tr_sl=en&_x_tr_tl=sv&_x_tr_hl=sv&_x_tr_pto=sc) for luminance is: `0.2126 * R + 0.7152 * G + 0.0722 * B`.

```javascript
export const getLuminance = (hex: string): number => {
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const sRGB = [r, g, b].map((value) => {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};
```

To calculate the contrast ratio, I needed to determine the luminance of both the foreground and background colors.

The contrast ratio is then calculated by dividing the luminance of the brighter color by the luminance of the darker color. I use the following [formula](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) for this calculation: `(brighter + 0.05) / (darker + 0.05)`.

```javascript
export const getContrastRatio = (
  foreground: string,
  background: string
): number => {
  const lum1 = getLuminance(foreground);
  const lum2 = getLuminance(background);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};
```

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.
