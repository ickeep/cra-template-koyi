import { KyAxiosConf, KyConfigContext, KyRootContext } from '@tencent/koyi';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { KyAxiosConfProps } from '@tencent/koyi/type/tools/http';

export default observer(() => {
  const root = useContext(KyRootContext);
  const { apiCode: { unauthorized }, apiDataFormat: { code } } = useContext(KyConfigContext);

  // 请求带 cookie
  const before: KyAxiosConfProps['before'] = (config) => {
    // 代码规范强制要求
    const { headers, withCredentials: isWith = true } = config;

    return { ...config, headers, withCredentials: isWith };
  };

  // 未登录时 弹出登录框
  const after: KyAxiosConfProps['after'] = (res) => {
    res[code] === unauthorized && res.config.url !== '/site/get-user' && root.setLoginModalVisible(true);

    return res;
  };

  return (
    <KyAxiosConf before={before} after={after} />
  );
});
