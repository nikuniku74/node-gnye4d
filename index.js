// run `node index.js` in the terminal
const express = require('express');
const path = require('path');

const app = express();

app.get('/test', function (req, res) {
  console.log('path: ', path.join(__dirname));
  res.send('ok');
});

console.log(`Hello Node.js v${process.versions.node}!`);

app.listen(3000);
