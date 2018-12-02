// Express Documentation: https://expressjs.com/
// Import Express & Create a new Express app.
const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen('3000', () => {
   console.log('Server is up on http://localhost:3000');
});