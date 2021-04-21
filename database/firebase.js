import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDqLiUCmgvWq5sLKPf7RPEEEYGk4W2_jnA",
    authDomain: "crud-js-poo.firebaseapp.com",
    projectId: "crud-js-poo",
    storageBucket: "crud-js-poo.appspot.com",
    messagingSenderId: "684798151089",
    appId: "1:684798151089:web:a00c38fbe66086c4225590"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {
    firebase,
    db
}