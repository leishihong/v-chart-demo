const path = require('path')
const TerserPlugin = require('terser-webpack-plugin') // 清楚页面会遗留console.log

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  // publicPath: '/boss/',
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  runtimeCompiler: true, // 运行时版本是否需要编译
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  chainWebpack: config => {
    config.resolve.modules.add(path.resolve(__dirname, 'src'))

    // 为了补删除换行而加的配置
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // modify the options...
        options.compilerOptions.preserveWhitespace = true
        return options
      })
  },
  // 修改webpack config, 使其不打包externals下的资源
  configureWebpack: () => {
    const myConfig = {}
    if (process.env.NODE_ENV === 'production') {
      myConfig.plugins = []
      myConfig.plugins.push(
        // 很多时候写页面会遗留console.log，影响性能。设置个drop_console就非常香
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false, // Must be set to true if using source-maps in production
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }
        })
        // new BundleAnalyzerPlugin()
      )
    }

    return myConfig
  },
  devServer: {
    open: true,
    port: 8055,
    hotOnly: true // 热更新
  },
  pwa: {
    name: 'genie',
    themeColor: '#FF2736',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW'
  }
}
