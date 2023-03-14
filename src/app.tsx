import React from 'react';
import ReactDOM from 'react-dom';
import { bindReactRuntime } from 'hel-micro';
import * as antd from 'antd';

bindReactRuntime({ React, ReactDOM });
// window.React = React;
// window.antd = antd;

// async function main() {
//   init({
//     apiPrefix: 'http://localhost:8080/cdn',
//   });
// }

// main();
