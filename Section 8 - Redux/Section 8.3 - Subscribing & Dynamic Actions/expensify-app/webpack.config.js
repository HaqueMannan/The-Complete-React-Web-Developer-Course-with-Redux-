// Documentation: https://webpack.js.org/
// Node Path API: https://nodejs.org/api/path.html
const path = require('path');

// entry point -> output
module.exports = {
   entry: './src/playground/redux-101.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
      }, {
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader'
         ]
      }]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
   }
};


// __direname Provides the absolute location path for the current location.
// path.join method allows you to join directory paths to give a final path yuo want.
// console.log(path.join(__dirname, 'public'));