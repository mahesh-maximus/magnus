const path = require('path');

module.exports = {
  //...
  mode: 'development',
  devServer: {
    watchFiles: ['src/**/*', 'public/**/*'],
    static: {
      directory: path.join(__dirname, 'public')
    },
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
        '.eastus.cloudapp.azure.com'
         ]
  },
  optimization: {
    chunkIds: false,
    minimize: false
  }
};