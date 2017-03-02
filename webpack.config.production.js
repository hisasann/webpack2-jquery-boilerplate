import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false,
      exclude: ['assets']
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),

    new ExtractTextPlugin({ filename: './stylesheets/style.css', allChunks: true })
  ]

});