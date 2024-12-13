const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'icss',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                getLocalIdent: (context, localIdentName, localName, options) => {
                  const name = context.resourcePath.split('/').pop().replace(sassModuleRegex, '');
                  const hash = require('loader-utils').getHashDigest(
                    Buffer.from(`${name}${localName}`),
                    'md5',
                    'base64',
                    5,
                  );
                  return `${name}__${localName}--${hash}`;
                },
              },
            },
          },
          'sass-loader',
        ],
      },

      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'icss',
              },
            },
          },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                getLocalIdent: (context, localIdentName, localName, options) => {
                  const name = context.resourcePath.split('/').pop().replace(cssModuleRegex, '');
                  const hash = require('loader-utils').getHashDigest(
                    Buffer.from(`${name}${localName}`),
                    'md5',
                    'base64',
                    5,
                  );
                  return `${name}__${localName}--${hash}`;
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  devtool: 'source-map',
};
