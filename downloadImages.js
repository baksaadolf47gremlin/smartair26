const https = require('https');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

function decodeUrl(url) {
  return url.replace(/&amp;/g, '&').replace(/&#038;/g, '&');
}

const assets = [
  { name: 'logo.png', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2024/12/SMARTAIR_logo-02.png?fit=250%2C37&ssl=1' },
  { name: 'logo-white.png', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2025/01/SMARTAIR_konturos_feher_logo.png?fit=1898%2C282&ssl=1' },
  { name: 'hero-1.jpg', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2025/02/smart-air-01.jpg?fit=800%2C800&ssl=1' },
  { name: 'hero-2.png', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2025/03/SA2-2.png?w=1290&ssl=1' },
  { name: 'service-1.jpg', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2025/02/smart-air-02.jpg?fit=800%2C450&ssl=1' },
  { name: 'service-2.jpg', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2025/02/smart-air-03.jpg?fit=800%2C533&ssl=1' },
  { name: 'service-3.jpg', url: 'https://i0.wp.com/smart-air.hu/wp-content/uploads/2025/02/smart-air-04.jpg?fit=800%2C600&ssl=1' }
];

assets.forEach(asset => {
  const finalUrl = decodeUrl(asset.url);
  const dest = path.join(imgDir, asset.name);
  
  const file = fs.createWriteStream(dest);
  https.get(finalUrl, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', function() {
        file.close();  // close() is async, call cb after close completes.
        console.log(`Downloaded ${asset.name}`);
      });
    } else {
        console.error(`Failed to download ${asset.name}, status code: ${response.statusCode}`);
    }
  }).on('error', function(err) {
    fs.unlink(dest, () => {}); // Delete the file async. (But we don't check the result)
    console.error(`Error downloading ${asset.name}:`, err.message);
  });
});
