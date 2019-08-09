var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const appConfig = require('./appConfig.ts');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      templateParameters: {
        config: appConfig,
      },
    }),
  ],
};
