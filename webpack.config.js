module.exports = [{
  entry: ['./mwc.scss', './mwc.js'],
  output: {
    filename: 'mwc.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'mwc.min.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules']
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        }
      }
    ]
  },
}];
