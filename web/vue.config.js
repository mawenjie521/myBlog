const path = require('path')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const root = path.resolve(__dirname, '..'); // 根目录

console.log(root)
var config = {
  outputDir: path.resolve(root, 'project/static/output/vue'),
  configureWebpack: {
    devtool: 'eval-source-map',
    output: {
        library: 'portal_application',
        libraryTarget: 'window',
        libraryExport: 'default',
        filename: 'app.bundle.js'
    },
    resolve: {
      alias: {
          '@root': path.resolve(__dirname,'../')
      },
      extensions: ['.js', '.vue']
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: { extract: false },
  lintOnSave: false,
  productionSourceMap: false,
}

module.exports = config
