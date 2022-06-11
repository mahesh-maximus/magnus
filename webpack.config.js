const path = require('path');

module.exports = {
  //...
  mode: 'development',
  devServer: {
    magicHtml: false,
    hot: false,
    liveReload: true,
    //watchFiles: ['public/**/*'],
    static: {
      //directory: path.join(__dirname, 'public'),
      watch: true
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
  },
  watchOptions: {
    ignored: '**/node_modules',
  }
};