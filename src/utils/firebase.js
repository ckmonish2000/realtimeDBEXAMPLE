import firebase from "firebase"


 var firebaseConfig = {
    apiKey: "AIzaSyCfuCHT4REqk2YLKVrHMHVdgd7BjZj0-r0",
    authDomain: "todos-75c8b.firebaseapp.com",
    databaseURL: "https://todos-75c8b.firebaseio.com",
    projectId: "todos-75c8b",
    storageBucket: "todos-75c8b.appspot.com",
    messagingSenderId: "407500888483",
    appId: "1:407500888483:web:b9f6c362309dc0b1f96216",
    measurementId: "G-LYP9YMTCH2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase