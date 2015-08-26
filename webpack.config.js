module.exports = {
  entry: './assets/js/calc.js',
  output: {
    path: __dirname,
    filename: './assets/js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html?minimize' },
      //{ test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, loader: 'jade' }
    ]
  }
};
