const https = require('https');
const fs = require('fs');

const url = 'https://smart-air.hu/';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('site.html', data);
    console.log('HTML saved to site.html. Length: ' + data.length);
    
    // Quick regex to extract image URLs
    const regex = /<img[^>]+src="([^">]+\.(png|jpg|jpeg|webp|svg|gif)[^">]*)"/gi;
    let match;
    const images = [];
    while ((match = regex.exec(data)) !== null) {
      images.push(match[1]);
    }
    
    fs.writeFileSync('images.json', JSON.stringify([...new Set(images)], null, 2));
    console.log('Extracted ' + [...new Set(images)].length + ' unique images.');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
