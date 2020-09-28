import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var fbConfig = {
  apiKey: "AIzaSyC-TYORpyNzrGe7Z__FWKMXiSCnyqJX93E",
  authDomain: "project-plan-1398c.firebaseapp.com",
  databaseURL: "https://project-plan-1398c.firebaseio.com",
  projectId: "project-plan-1398c",
  storageBucket: "project-plan-1398c.appspot.com",
  messagingSenderId: "379823609165",
  appId: "1:379823609165:web:21a372d660f0985abd9304",
};
// Initialize Firebase
firebase.initializeApp(fbConfig);

export default firebase;
