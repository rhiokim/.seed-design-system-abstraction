"use strict"
process.env.NODE_ENV = "production"

const rm = require("rimraf")
const path = require("path")
const webpack = require("webpack")
const config = require("../config")
const webpackConfig = require("./webpack.prod.config")

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
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
      console.log("  Vue Design System build failed with errors.\n")
      process.exit(1)
    }

    console.log("  Vue Design System build complete.\n")
    console.log(
        "  Tip: built files are meant to be served over an HTTP server.\n" +
          "  Opening index.html over file:// won't work.\n"
    )
  })
})