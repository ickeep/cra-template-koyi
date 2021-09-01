import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import { KyConfigProvider, KySetSite } from '@tencent/koyi';
import config from '@src/config';
import { BrowserRouter } from 'react-router-dom';
import RootConf from '@src/root_config';
import AxiosConf from '@src/ajax_conf';
import App from '@src/app';

const render = () => ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN} >
        <KyConfigProvider value={config}>
          <AxiosConf />
          <RootConf />
          <App />
          <KySetSite />
        </KyConfigProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
process.env.NODE_ENV !== 'test' && render();
export default render;
