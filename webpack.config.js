const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'app'),
  root: __dirname
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx']
  }
}
