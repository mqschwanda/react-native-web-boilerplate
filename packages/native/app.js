import Expo from 'expo';
import React from 'react';
import App from 'app';

/**
 * hack `global.self`
 * @see {@link https://github.com/facebook/react-native/issues/9599}
 */
if (global && !global.self) global.self = global;

const Root = props => [
  <App key="app" {...props} />,
  process.env.NODE_ENV === 'development'
    ? <Expo.KeepAwake key="keep-awake" />
    : null,
];

Expo.registerRootComponent(Root);
