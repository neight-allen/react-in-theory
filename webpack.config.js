const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'app'),
  root: path.join(__dirname, 'public')
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.root,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx'],
  }
}
