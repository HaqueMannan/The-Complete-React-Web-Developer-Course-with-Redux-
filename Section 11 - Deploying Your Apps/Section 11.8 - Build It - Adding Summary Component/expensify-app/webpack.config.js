// Documentation: https://webpack.js.org/
// Node Path API: https://nodejs.org/api/path.html
const path = require('path');
// Webpack Plugin:  https://www.npmjs.com/package/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// entry point -> output
module.exports = (env) => {
   const isProduction = env === 'production';
   const CSSExtract = new ExtractTextPlugin('styles.css');

   return {
      entry: './src/app.js',
      output: {
         path: path.join(__dirname, 'public', 'dist'),
         filename: 'bundle.js'
      },
      module: {
         rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        sourceMap: true
                     }
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        sourceMap: true
                     }
                  }
               ]
            })
         }]
      },
      plugins: [
         CSSExtract
      ],
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
         contentBase: path.join(__dirname, 'public'),
         historyApiFallback: true,
         publicPath: '/dist/'
      }
   };
};

// __direname Provides the absolute location path for the current location.
// path.join method allows you to join directory paths to give a final path yuo want.
// console.log(path.join(__dirname, 'public'));