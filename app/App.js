import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
/**
 * firebase firestore data contianers
 * @see {@link https://github.com/mqschwanda/node-monorepo/tree/master/packages/firebase-containers}
 */
import { firestoreContainer } from '@mqschwanda/firebase-containers';

import { db, seeder } from './firebase';

const doc = db.collection(seeder.collection).doc(seeder.id);
const container = firestoreContainer(doc);

const Code = ({ style, ...props }) =>
  <Text style={StyleSheet.compose(styles.code, style)} {...props} />;

const Snapshot = container(({ snapshot }) =>
  <Code style={styles.text}>{JSON.stringify(snapshot.data())}</Code>
);

const App = props => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Welcome to React
    </Text>
    <Text style={styles.text}>
      Open up `<Code>app/App.js</Code>` to start working on your app!
    </Text>
    <Text style={styles.text}>
      Changes you make will automatically reload.
    </Text>
    <Text style={StyleSheet.compose(styles.text, { paddingTop: fontSize })}>
      Snapshot.data() --> <Snapshot />
    </Text>
  </View>
);

export default App;

const fontSize = 12;
const color = '#222';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSize * 3,
    color,
  },
  text: {
    fontSize,
    color,
  },
  code: {
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
