const firebase = require('firebase/app');
require('firebase/firestore');
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyCFQypij4IRoyc0KXQ1ei7dCFZ-aTB8jUQ',
  authDomain: 'crown-db-67449.firebaseapp.com',
  databaseURL: 'https://crown-db-67449.firebaseio.com',
  projectId: 'crown-db-67449',
  storageBucket: '',
  messagingSenderId: '709195583448',
  appId: '1:709195583448:web:27c2eb500f54c794'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
