import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAO-s-soqZmzWL6wenKaiLqqIXd3-K2e1Y",
    authDomain: "booking-application-e9c8f.firebaseapp.com",
    databaseURL: "https://booking-application-e9c8f.firebaseio.com",
    projectId: "booking-application-e9c8f",
    storageBucket: "booking-application-e9c8f.appspot.com",
    messagingSenderId: "133230959925"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };

// class Firebase {
//     constructor() {
//         app.initializeApp(config);
//         this.auth = app.auth();
//         this.db = app.database();
//     }
// }

// export default Firebase;


