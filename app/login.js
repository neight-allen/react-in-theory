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

  loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorCode)
      console.log(errorMessage)
      console.log(email)
      console.log(credential)
      // ...
    });
  }

}
