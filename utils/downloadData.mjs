import fs from 'fs';
import https from 'https';
import path from 'path';

const url = 'https://coviddashboard.calpoly.io/stats-history.json';

https.get(url, (res) => {
  // eslint-disable-next-line no-underscore-dangle
  const __dirname = path.resolve(path.dirname(''));
  const pathToFile = path.join(__dirname, '/public/stats-history.json');
  const file = fs.createWriteStream(pathToFile);
  res.pipe(file);
  file.on('finish', () => file.close());
});
