module.exports = {
  output: {
    path: __dirname,
    filename: './dist/js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html?minimize' },
      //{ test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, loader: 'jade' }
    ]
  }
};
