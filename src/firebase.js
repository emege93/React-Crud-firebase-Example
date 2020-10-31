import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXLuLWC11784X4kmakJmzclTqiS6ouKT0",
    authDomain: "crud-udemy-react-4427a.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-4427a.firebaseio.com",
    projectId: "crud-udemy-react-4427a",
    storageBucket: "crud-udemy-react-4427a.appspot.com",
    messagingSenderId: "62306851591",
    appId: "1:62306851591:web:49ba6ff6584cdec948c3a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}