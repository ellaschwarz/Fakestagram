import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB5WzH2g6I2GGwRdfGEIMgzpfxMSlpxs_8",
    authDomain: "fakestagram-5f3a2.firebaseapp.com",
    databaseURL: "https://fakestagram-5f3a2.firebaseio.com",
    projectId: "fakestagram-5f3a2",
    storageBucket: "fakestagram-5f3a2.appspot.com",
    messagingSenderId: "340678934272",
    appId: "1:340678934272:web:465b87144230ec29403de5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;