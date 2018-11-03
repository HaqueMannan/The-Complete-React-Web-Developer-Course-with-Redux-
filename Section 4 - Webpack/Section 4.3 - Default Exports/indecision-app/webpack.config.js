// Documentation: https://webpack.js.org/
// Node Path API: https://nodejs.org/api/path.html
const path = require('path');

// entry point -> output
module.exports = {
   entry: './src/app.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   }
};


// __direname Provides the absolute location path for the current location.
// path.join method allows you to join directory paths to give a final path yuo want.
// console.log(path.join(__dirname, 'public'));