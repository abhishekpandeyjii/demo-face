const Jimp = require('jimp');

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

Jimp.read('screenshot.png')
  .then(image => {
    const colorCounts = {};
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Filter out grays/whites/blacks
      const max = Math.max(red, green, blue);
      const min = Math.min(red, green, blue);
      
      if (max - min > 30 && max < 250 && min > 10) {
        // Round colors to nearest 5 to group similar pixels
        const r = Math.round(red / 5) * 5;
        const g = Math.round(green / 5) * 5;
        const b = Math.round(blue / 5) * 5;
        const hex = rgbToHex(r, g, b);
        
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      }
    });

    // Sort by frequency
    const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    
    console.log("Top 10 Vibrant Colors Found:");
    sortedColors.slice(0, 10).forEach(c => {
      console.log(c[0] + " - count: " + c[1]);
    });
  })
  .catch(err => {
    console.error(err);
  });
