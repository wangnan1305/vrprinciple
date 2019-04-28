module.exports = {
  // 项目部署基础
  // 默认情况下，我们假设你的应用将被部署在域的根目录下,
  // 例如：https://www.my-app.com/
  // 如果您的应用程序部署在子路径中，则需要在这指定子路径
  // 例如：https://www.foobar.com/my-app/
  // 需要将它改为'/my-app/'
  publicPath: './',
  // 输出文件目录
  // 将生成的静态资产(js、css、img、字体)嵌套在下面的目录。
  assetsDir: 'static',

  // 多页面应用配置
  // pages: {
  //   index: {
  //     // entry for the page 可以将多页面应用 创建page目录，目前是为了省事，直接在src目录下创建
  //     entry: 'src/main.js',
  //     // the source template
  //     template: 'public/index.html',
  //     // output as dist/index.html
  //     filename: 'index.html'
  //   },
  //   detail: {
  //     // entry for the page
  //     entry: 'src/detail.js',
  //     // the source template
  //     template: 'public/detail.html',
  //     // output as dist/index.html
  //     filename: 'detail.html'
  //   },
  // },

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: process.env.VUE_APP_TYPE !== 'production',
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // 是否在组件中提取CSS到独立的CSS文件中(而不是用JavaScript内联并动态注入)。
    // extract: true,
    // 是否启用CSS的源映射。将其设置为true可能会影响构建性能。
    sourceMap: false,
    // css预设器配置项一天
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // 您可以使用css实现这一点。在vue.config.js loaderOptions选项。例如，将一些共享的全局变量传递给所有的Sass样式
        // data: `@import "@/variables.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  /* eslint-disable global-require */
  parallel: require('os').cpus().length > 1,
  /* eslint-enable global-require */

  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    // open: process.platform === 'darwin',
    // host: '127.0.0.1',
    // port: 8081,
    // https: false,
    // hotOnly: false,
    // proxy: {
    // '/api': {
    //   target: 'http://127.0.0.1:8081/api',
    //   ws: true,
    //   changeOrigin: true
    //   },
    // '/foo': {
    //   target: 'http://127.0.0.1:8081/foo'
    //   }
    // }, // 设置代理
    overlay: {
      warnings: false,
      errors: false
    }
    // lintOnSave: process.env.NODE_ENV !== 'production',
  }
}
