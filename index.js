const express = require('express');
const app = express();
const port = 3001;
let result = 0;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/add/:number', (req, res) => {
  const { number } = req.params;
  const isNumber = !isNaN(number);
  try {
    res.status(223);
    if (!isNumber) throw 'Parameter is not a number!';
    result += parseInt(number);
    res.json({ result });
  } catch (e) {
    res.send(e);
  }
});

app.delete('/add/', (req, res) => {
  result = 0;
  res.send('Deleted!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
