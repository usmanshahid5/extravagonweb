const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // production mode
  app.use('/', express.static('client/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Node JS Server Started in Port ${ port }`));