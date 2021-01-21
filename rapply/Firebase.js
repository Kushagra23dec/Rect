import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAydgUZmK8ps5oZRHy-Go0GfbmdXmk8_h0",
  authDomain: "rapply.web.app",
  databaseURL: "",
  projectId: "rapply-ea41d",
  storageBucket: "gs://rapply-ea41d.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;