const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = { 
  mode: 'development',
  entry: './src/index.js',
  output: {
      filename: 'bundle.js', 
      path: path.resolve(__dirname, 'dist'), 
  },
  watch: true, 
  module: {
      rules: [
          {
              test: /\.js$/, 
              exclude: /node_modules/, 
              use: { 
                  loader: "babel-loader",
                  options: {
                      presets: [
                          ["@babel/preset-env", {
                              targets: "> 0.25%, not dead"
                          }]
                      ]
                  }
              }
          },
          {
              test: /\.scss$/i, 
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader,
                  },
                  'css-loader',
                  'sass-loader'
              ]
          }
      ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "style.css",
      })
  ]
};


