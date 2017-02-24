import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import entryPoints from './webpack.config.entrypoints';

let entryPointsToWebpack = {};
Object.keys(entryPoints).forEach(function (id) {
  entryPointsToWebpack = Object.assign(entryPointsToWebpack, {
    [id]: entryPoints[id].js
  });
});

export default {
  entry: entryPointsToWebpack,
  output: {
    pathinfo: true,
    path: path.join(__dirname, './dist'),
    filename: 'javascripts/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),

    ...Object.keys(entryPoints).map(function (id) {
      let templatePath = entryPoints[id].template;
      let distPath = (id === 'index') ? 'index' : templatePath.replace(/\./g, '/') + '/index';

      return new HtmlWebpackPlugin({
        chunks: [],
        filename: './' + distPath + '.html',
        hash: true,
        inject: 'body',
        template: '!!ejs-compiled-loader!' + path.join(__dirname, './app/templates/' + templatePath + '.ejs'),
        // title: ''
      });
    }).concat([
    ])
  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};