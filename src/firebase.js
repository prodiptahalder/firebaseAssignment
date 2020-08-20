import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCL_JRYPHjzEUxByN4Wlco5lu-Vtxbv2bY",
  authDomain: "react-project-35a1b.firebaseapp.com",
  databaseURL: "https://react-project-35a1b.firebaseio.com",
  projectId: "react-project-35a1b",
  storageBucket: "react-project-35a1b.appspot.com",
  messagingSenderId: "680682103531",
  appId: "1:680682103531:web:2ef684d192e16f6bdfd4ae"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
