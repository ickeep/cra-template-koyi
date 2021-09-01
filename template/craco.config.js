/* eslint-disable @typescript-eslint/no-require-imports */
const { cdn, plugins, externals, alias } = require('./craco.common');
const { getPlugin, pluginByName } = require('@craco/craco/lib/webpack-plugins');
const { version } = require('./package.json');

module.exports = {
  plugins,
  externals,
  webpack: {
    alias,
    configure: (webpackConfig) => {
      const newConf = webpackConfig;
      newConf.externals = externals;
      const { match: htmlWebpackPlugin } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));
      htmlWebpackPlugin.options.cdnJsArr = cdn.js;
      htmlWebpackPlugin.options.cdnCssArr = cdn.css;
      return webpackConfig;
    },
  },
};
