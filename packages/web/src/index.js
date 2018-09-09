import { AppRegistry } from 'react-native';
import App from 'app';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});

registerServiceWorker();
