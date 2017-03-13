/**
 * Created by Chris Dorward on 12/03/2017
 * /webpack.config
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './public/locomote.min.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                  presets: 'es2015',
                },
            },
        ]
    },
    plugins: [

      // Minify JavaScript
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),

      // Avoid publishing files when compilation fails
      new webpack.NoEmitOnErrorsPlugin(),

    ],
    stats: {
        // Nice colored output
        colors: true
    }
};
