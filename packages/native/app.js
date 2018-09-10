import './polyfills';

import Expo from 'expo';
import React from 'react';
import App from 'app';

const Root = props => [
  <App key="app" {...props} />,
  process.env.NODE_ENV === 'development'
    ? <Expo.KeepAwake key="keep-awake" />
    : null,
];

Expo.registerRootComponent(Root);
