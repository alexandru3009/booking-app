import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAO-s-soqZmzWL6wenKaiLqqIXd3-K2e1Y",
    authDomain: "booking-application-e9c8f.firebaseapp.com",
    databaseURL: "https://booking-application-e9c8f.firebaseio.com",
    projectId: "booking-application-e9c8f",
    storageBucket: "",
    messagingSenderId: "133230959925"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };