/**
 * 使用系统的import()方法动态加载组件
 */
import { useRef, useEffect, useState, useMemo } from 'react';
import Loadable from 'react-loadable';
import { importScript } from 'runtime-import';

function DynamicImport(props) {
  const { url, ...restProps } = props;
  const ComRef = useRef();
  const [_, update] = useState({});
  const [ComponentInstance, setComponentInstance] = useState();

  const loadComponent = async () => {
    const module = await importScript(url);
    console.log('module: ', module);
    setComponentInstance(() => module.Button);
  };

  useEffect(() => {
    if (url) {
      loadComponent(url);
    }
  }, [url]);

  // const Componet = useMemo(() => {
  //   if (url) {
  //     return Loadable({
  //       loader: () =>
  //         fetch(url)
  //           .then((res) => {
  //             return res.text();
  //           })
  //           .then((res) => {
  //             new Function(`${res}`)();
  //             return window.LowCode.Button;
  //           }),
  //       loading: () => <div>Loading...</div>,
  //     });
  //   }
  // }, [url]);

  return (
    <>
      {/* <Componet {...restProps} /> */}
      {ComponentInstance ? <ComponentInstance {...restProps} /> : null}
    </>
  );
}

export default DynamicImport;
