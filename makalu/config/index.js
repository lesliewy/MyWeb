var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    host: 'localhost',
    port: 8070,
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口, 用来跨域
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:3000/', // 接口的域名
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        // 注意： '/api' 为匹配项，target 为被请求的地址，因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的，
        // 所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'。如果本身的接口地址就有 '/api' 这种通用前缀，
        // 就可以把 pathRewrite 删掉。
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
