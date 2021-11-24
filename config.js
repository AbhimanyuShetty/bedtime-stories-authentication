import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCr16B9N_YElvo4G96zctFJs4XL6B4mYjg",
  authDomain: "beddauthh.firebaseapp.com",
  projectId: "beddauthh",
  storageBucket: "beddauthh.appspot.com",
  messagingSenderId: "1072079155388",
  appId: "1:1072079155388:web:360f56d22dd6861137a0b9"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();