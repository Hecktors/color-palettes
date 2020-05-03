// {
//   paletteName: "Flat UI Colors v1",
//   id: "flat-ui-colors-v1",
//   emoji: "🤙",
//   colors: [
//     { name: "Turquoise", color: "#1abc9c" },

//   ]
// }

import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getScale = (palette) => {
  let newPalette = { ...palette, colors: {} };
  // for (let level of levels) {
  //   newPalette.colors[level] = [];
  // }
  newPalette.colors = levels.reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {});

  for (let color of palette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    // console.log(scale);
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
};

const getRange = (hexColor) => {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

const generateScale = (hexColor, numberOfColors) => {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
};

export { getScale };
