const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const { SERVER_HOST, SERVER_PORT } = require('./constants');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    open: true, // 打开默认浏览器
    historyApiFallback: true, // 不开的话BrowserRouter会有问题
    // client: {
    //     logging: 'info',
    // },
    // devMiddleware: {
    //     stats: 'errors-only',
    // },
  },
});
