const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sw: './sw.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      scriptLoading: 'blocking',
      base: '/area-guide/',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'page1.html',
      template: 'pages/page1.html',
      scriptLoading: 'blocking',
      base: '/area-guide/',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: 'pages/page2.html',
      scriptLoading: 'blocking',
      base: '/area-guide/',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      BASE: "'/area-guide/'"
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    assetModuleFilename: '[name][ext]',
    clean: true
  },

   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|json)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  }
}
