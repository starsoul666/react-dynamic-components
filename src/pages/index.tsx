import { useEffect, useState, useRef } from 'react';
import styles from './index.less';
import DynamicComponent from '@/components/DynamicComponent';
import DynamicImport from '@/components/DynamicComponent/DynamicImport';
import RemoteBaseComponent from '@/components/RemoteBaseComponent';

export default function IndexPage() {
  const [params, setParams] = useState({});

  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DynamicComponent
        {...params}
        text="按钮1"
        onClick={handleClick}
        style={{ color: 'red' }}
      />
      {/* <DynamicComponent
        name="rrc-button"
        compName="Button"
        versionId="1.0.0"
        text="按钮2"
      /> */}

      <DynamicImport
        url="http://localhost:8080/cdn/button/dist/react-demo.min.js"
        text="测试2"
        onClick={() => {
          setParams({
            name: 'rrc-button',
            compName: 'Button',
            versionId: '1.0.0',
          });
        }}
      />

      {/* <RemoteBaseComponent
        url="http://localhost:8080/cdn/button/dist/react-demo.min.js"
        text="测试1"
        onClick={handleClick}
        style={{ color: 'red' }}
      /> */}
    </div>
  );
}
