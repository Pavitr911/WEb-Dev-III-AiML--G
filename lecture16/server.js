const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

const logMiddleware = (req, res, next) => {
  req.name = 'John Doe';
  console.log('Request url:', req.url, 'req method:', req.method, 'Time:', new Date().toLocaleString());
  next();
};

const apiCheckMiddleware = (req, res, next) => {
  if (req.query.API_KEY === '1234') {
    console.log('authenticator');
    next();
  } else {
    res.send('API invalid');
  }
};

app.use(logMiddleware);
app.use(apiCheckMiddleware);

app.get('/data', (req, res) => {
  console.log('request name:', req.name);
  console.log('HELLO WORLD');
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
