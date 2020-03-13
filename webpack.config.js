const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'main.js'
  },
  module:{
    rules:[
      {
        test:/.vue$/,
        use:'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}