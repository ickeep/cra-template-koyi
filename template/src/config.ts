import { DF_CONFIG } from '@tencent/koyi';

const apiURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://api.xxx.com';
const cdnHost = 'https://cdn.xxx.com';

const CONFIG = {
  ...DF_CONFIG,
  staticHost: { svg: `${cdnHost}/svg/`, img: `${cdnHost}/img/` },
  apiHost: { default: apiURL, cdn: cdnHost },
};

export default CONFIG;
