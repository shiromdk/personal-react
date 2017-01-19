var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS =[
    'react','react-dom','react-redux','react-dom','redux','redux-form','redux-thunk','lodash'
];

module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest']
    }),
      new HtmlWebpackPlugin({
        template:'src/index.html'
      })
  ]
};