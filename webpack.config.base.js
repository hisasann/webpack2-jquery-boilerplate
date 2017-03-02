import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
      // js
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },

      // css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?url=false'
        })
      },

      // scss
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?url=false!sass-loader'
        })
      },

      // ejs
      {
        test: /\.ejs$/,
        use: 'ejs-loader'
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
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
  node: {
    fs: "empty"
  },
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};