// Firebase App is always required and must be first
import firebase from 'firebase/app';

// rename firebase.config.example.js --> firebase.config.js and enter information
import config from '@config/firebase/firebase.config';

// Add additional services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';
// Comment out (or don't require) services that you don't want to use
// import 'firebase/storage';

// Initialize Firebase
firebase.initializeApp(config);

// Get a reference to the database service
export const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

// seed a test document
export const seeder = {
  collection: 'docs',
  id: 'doc',
  data: () => ({ name: 'test' }),
};
const Docs = db.collection(seeder.collection);
const Doc = Docs.doc(seeder.id);
// check if exists and run seeder
Doc.get().then(({ exists }) => !exists && Doc.set(seeder.data()));

export default firebase;
