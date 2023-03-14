import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const RemoteBaseComponent = (props) => {
  const { url, ...restProps } = props;

  const [Comp, setComponent] = useState(null);

  const importComponent = useCallback(() => {
    return fetch(url).then((res) => {
      return res.text();
    });
  }, [url]);

  const loadComp = useCallback(async () => {
    new Function(`${await importComponent()}`)();
    // window.eval(`${await importComponent()}`);
    setComponent(() => window.LowCode.Button); // 这里需要注意，不能用setComponent(component)，因为compoennt是一个函数，而setComponent接受两种形式的参数，一种是字面量，一种是函数，函数会被执行
  }, [importComponent, setComponent]);

  useEffect(() => {
    loadComp();
  }, [loadComp]);

  if (Comp) {
    return <Comp {...restProps} />;
  }

  return null;
};

export default RemoteBaseComponent;
