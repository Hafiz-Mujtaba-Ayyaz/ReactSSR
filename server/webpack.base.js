const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['ignore-loader'], 
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
            ['@babel/preset-react', { runtime: 'automatic' }]
          ]
        }
      },
      // {
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ['null-loader']
      // },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'icss',
                localIdentName: '[name]__[local]___[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src')
              },
              importLoaders: 1
            }
          },
          'sass-loader'
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     sassOptions: {
          //       // quietDeps: true
          //     }
          //   }
          // }
        ]
      }
    ]
  }
};
