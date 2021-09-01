import { KyRootContext } from '@tencent/koyi';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

export default observer(() => {
  const root = useContext(KyRootContext);

  useEffect(() => {
    const { setHeader, setFooter } = root;

    setHeader({
      theme: 'light',
      isShowMenu: false,
    });

    setFooter({ text: '@koyi.woa.com' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
});
