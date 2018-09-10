import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Welcome to React
    </Text>
    <Text style={styles.text}>
      Open up `packages/app/App.js` to start working on your app!
    </Text>
    <Text style={styles.text}>
      Changes you make will automatically reload.
    </Text>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    color: '#222'
  },
  text: {
    fontSize: 12,
    color: '#222',
  },
});
