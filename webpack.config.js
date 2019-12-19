/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  // Set the webpack mode
  mode: process.env.NODE_ENV || 'production',

  // Loads the entry object from the AWS::Serverless::Function resources in your
  // template.yaml or template.yml
  entry: './src/index.ts',

  // Create source maps
  devtool: 'source-map',

  externals: process.env.NODE_ENV === 'development' ? [] : ['aws-sdk'],

  // Resolve .js, .jsx, .json, .ts and .tsx extensions
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },

  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: '@kredito/env-manager',
    libraryTarget: 'commonjs2',
  },

  // Target node
  target: 'node',

  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
