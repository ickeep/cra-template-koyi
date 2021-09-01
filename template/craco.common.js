/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  alias: {
    '@src': path.resolve(__dirname, './src'),
    '@test': path.resolve(__dirname, './test'),
    '@type': path.resolve(__dirname, './type'),
  },
  externals: {
    react: { amd: 'React', var: 'React', root: 'React', commonjs2: 'react', commonjs: 'react' },
    'react-dom': { amd: 'ReactDOM', var: 'ReactDOM', root: 'ReactDOM', commonjs2: 'react-dom', commonjs: 'react-dom' },
    'react-router-dom': { amd: 'ReactRouterDOM', var: 'ReactRouterDOM', root: 'ReactRouterDOM', commonjs2: 'react-router-dom', commonjs: 'react-router-dom' },
    mobx: 'mobx',
    'mobx-react-lite': { amd: 'mobxReactLite', var: 'mobxReactLite', root: 'mobxReactLite', commonjs2: 'mobx-react-lite', commonjs: 'mobx-react-lite' },
    antd: 'antd',
    moment: 'moment',
    xss: { amd: 'filterXSS', var: 'filterXSS', root: 'filterXSS', commonjs2: 'xss', commonjs: 'xss' },
    axios: 'axios',
    '@tencent/koyi': { amd: 'Koyi', var: 'Koyi', root: 'Koyi', commonjs2: '@tencent/koyi', commonjs: '@tencent/koyi' },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  cdn: {
    css: process.env.NODE_ENV === 'development'
      ? [
        'https://cdn.jsdelivr.net/npm/antd@4.16.12/dist/antd.min.css',
        'https://heim-woa-com-1258344701.cos.ap-guangzhou.myqcloud.com/koyi/0.4.0/koyi.css',
      ]
      : [
        'https://cdn.jsdelivr.net/npm/antd@4.16.12/dist/antd.min.css',
        'https://heim-woa-com-1258344701.file.myqcloud.com/koyi/0.4.0/koyi.css',
      ],
    js: process.env.NODE_ENV === 'development'
      ? [
        'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.min.js',
        'https://cdn.jsdelivr.net/npm/react-router-dom@5.2.0/umd/react-router-dom.js',
        'https://cdn.jsdelivr.net/npm/mobx@6.3.2/dist/mobx.umd.development.min.js',
        'https://cdn.jsdelivr.net/npm/mobx-react-lite@3.2.0/dist/mobxreactlite.umd.development.min.js',
        'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
        'https://cdn.jsdelivr.net/npm/moment@2.29.1/locale/zh-cn.js',
        'https://cdn.jsdelivr.net/npm/antd@4.16.12/dist/antd.js',
        'https://cdn.jsdelivr.net/npm/xss@1.0.8/dist/xss.js',
        'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.js',
        'https://heim-woa-com-1258344701.cos.ap-guangzhou.myqcloud.com/koyi/0.4.0/index.js',
      ]
      : [
        'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-router-dom@5.2.0/umd/react-router-dom.min.js',
        'https://cdn.jsdelivr.net/npm/mobx@6.3.2/dist/mobx.umd.production.min.js',
        'https://cdn.jsdelivr.net/npm/mobx-react-lite@3.2.0/dist/mobxreactlite.umd.production.min.js',
        'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
        'https://cdn.jsdelivr.net/npm/moment@2.29.1/locale/zh-cn.js',
        'https://cdn.jsdelivr.net/npm/antd@4.16.12/dist/antd.min.js',
        'https://cdn.jsdelivr.net/npm/xss@1.0.8/dist/xss.min.js',
        'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
        'https://heim-woa-com-1258344701.file.myqcloud.com/koyi/0.4.0/index.js',
      ],
  },
};
