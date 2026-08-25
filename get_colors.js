import { Jimp } from 'jimp';

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

async function run() {
  try {
    const image = await Jimp.read('screenshot.png');
    const colorCounts = {};
    
    image.scan((x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];
      
      const max = Math.max(red, green, blue);
      const min = Math.min(red, green, blue);
      
      if (max - min > 30 && max < 250 && min > 10) {
        // Round to nearest 10
        const r = Math.round(red / 10) * 10;
        const g = Math.round(green / 10) * 10;
        const b = Math.round(blue / 10) * 10;
        const hex = rgbToHex(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255));
        
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      }
    });

    const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    
    console.log("Top 10 Vibrant Colors Found:");
    sortedColors.slice(0, 10).forEach(c => {
      console.log(c[0] + " - count: " + c[1]);
    });
  } catch(e) {
    console.error(e);
  }
}
run();
