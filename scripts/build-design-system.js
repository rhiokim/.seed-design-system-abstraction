"use strict"

process.env.NODE_ENV = "production"

const rm = require("rimraf")
const path = require("path")
const webpack = require("webpack")
const config = require("../config")
const webpackConfig = require("./webpack.design.system.config")

rm(path.join(config.system.assetsRoot, config.system.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + "\n\n"
    )

    if (stats.hasErrors()) {
      console.log("  Design System build failed with errors.\n")
      process.exit(1)
    }

    console.log("  Design System build complete.\n")
    console.log(
      "  Tip: You can now publish the design system as a private NPM module.\n" +
      "  Users can import the provided UMD module using:\n\n" +
      "  import DesignSystem from 'vue-design-system'\n" +
      "  import 'vue-design-system/dist/system/system.css'\n\n" +
      "  Vue.use(DesignSystem)\n"
    )
  })
})