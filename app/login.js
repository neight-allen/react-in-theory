// Firebase Configuration
const firebase = require('firebase');

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBHNMsvLESL93UAU_rbNP2BE5kkEnVXNgs",
  authDomain: "react-in-theory.firebaseapp.com",
  databaseURL: "https://react-in-theory.firebaseio.com",
  storageBucket: "react-in-theory.appspot.com",
};

firebase.initializeApp(config);

module.exports = {

  storeUserInFirebase(email, password) {
    console.log('IN FIREBASE LOGIN FUNCTION')
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log("caught!")
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
  },
  
}
