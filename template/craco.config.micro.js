/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const fs = require('fs');
const { getPlugin, pluginByName } = require('@craco/craco/lib/webpack-plugins');
const { plugins, externals, alias } = require('./craco.common');

module.exports = {
  plugins,
  webpack: {
    alias,
    // eslint-disable-next-line complexity
    configure: (webpackConfig, opts) => {
      const micro = process.env.REACT_APP_MICRO
      const { paths } = opts;
      const newConf = webpackConfig;
      const buildPath = path.resolve(__dirname, 'dist/' + micro);
      const { output, optimization } = newConf;

      newConf.externals = externals;
      newConf.entry = path.resolve(__dirname, 'src/micro/' + micro + '/index.tsx');

      paths.appBuild = buildPath;
      paths.appPublic = `${paths.appPublic}/${micro}`;
      try {
        if (!fs.statSync(paths.appPublic).isDirectory()) {
          fs.mkdirSync(paths.appPublic);
        };
      } catch (error) {
        fs.mkdirSync(paths.appPublic);
      }
      newConf.output = {
        ...output,
        path: buildPath,
        filename: 'index.js',
        library: 'm_' + micro,
        libraryTarget: 'umd2',
      };

      delete optimization.splitChunks;
      delete optimization.runtimeChunk;
      newConf.optimization = optimization;
      const { match: definePlugin } = getPlugin(webpackConfig, pluginByName('DefinePlugin'));
      const { match: miniCssExtractPlugin } = getPlugin(webpackConfig, pluginByName('MiniCssExtractPlugin'));
      const { match: forkTsCheckerWebpackPlugin } = getPlugin(webpackConfig, pluginByName('ForkTsCheckerWebpackPlugin'));

      miniCssExtractPlugin.options.filename = micro + '.css';
      forkTsCheckerWebpackPlugin.options.filename = micro + '.css';
      newConf.plugins = [definePlugin, miniCssExtractPlugin, forkTsCheckerWebpackPlugin];

      newConf.externals = externals;
      return newConf;
    },
  },
};
