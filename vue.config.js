const { defineConfig } = require('@vue/cli-service')
const { VuetifyLoaderPlugin } = require('vuetify-loader')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import "@/assets/styles/main.scss";`
  //     }
  //   }
  // },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
