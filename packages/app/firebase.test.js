/**
 * [NOTE]: If these test are throwing errors make sure either
 * `process.env.FIREBASE_CONFIG` is set, or `firebase.config.js` exports the
 * config object.
 */

import firebase from 'firebase';
import 'firebase/firestore'; // Required for side-effects

/**
* pass the config object through the node env or create a firebase.config file
* that exports the config object
*/
const config = process.env.FIREBASE_CONFIG
  ? JSON.parse(process.env.FIREBASE_CONFIG)
  : require('@config/firebase/firebase.config').default;

export const initFirebase = () => {
  const app = firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true,
});

 return {
   app,
   seeder: {
     cities: {
       SF: { name: 'San Francisco' },
       LA: { name: 'Los Angeles' },
     },
     users: [{
       email: 'test.user@gmail.com',
       password: 'password',
     }]
   },
 };
};

export const killFirebase = (app) => {
  app.database().goOffline();
  app.delete();
};

describe('firebase', () => {
  let app;

  beforeAll(() => {
    ({ app } = initFirebase());
  });

  afterAll(() => {
    killFirebase(app);
  });

  describe('firestore', () => {
    it('should configure service', (done) => {
      const { firestore } = firebase.firestore()._config.firebaseApp.services_;
      expect(firestore).toBeDefined();

      done();
    });
  });

  describe('database', () => {
    it('should configure service', (done) => {
      const { database } = firebase.database().repo_.app.services_;
      expect(database).toBeDefined();

      done();
    });
  });
});
