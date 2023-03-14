import React, { useState, useEffect } from 'react';
import helMicro, { init } from 'hel-micro';
import { useRemoteComp } from 'hel-micro-react';

init({
  apiPrefix: 'http://localhost:8080/cdn',
});

function DynamicComponent(props) {
  const { name, compName, versionId, ...restProps } = props;

  const RemoteComponent = useRemoteComp(name, compName, {
    versionId,
  });
  return name ? <RemoteComponent {...restProps} /> : null;
}

export default DynamicComponent;
