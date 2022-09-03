const { resolve } = require('rath')

module.exports = {
  entry: './index.js',
  oninput: {
    path: resolve( __dirname, 'build'),
    filename: 'bundle.js'
  },
}