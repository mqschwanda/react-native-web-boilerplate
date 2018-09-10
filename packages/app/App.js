import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// https://github.com/mqschwanda/node-monorepo/tree/master/packages/firebase-containers
import { firestoreContainer } from '@mqschwanda/firebase-containers';

import { db, seeder } from './firebase';

const doc = db.collection(seeder.collection).doc(seeder.id);
const container = firestoreContainer(doc);


const Snapshot = container(({ snapshot }) =>
  <Text style={StyleSheet.compose(styles.text, { paddingTop: fontSize })}>
    Snapshot.data() --> {JSON.stringify(snapshot.data())}
  </Text>
);

const App = props => (
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
    <Snapshot />
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
});
