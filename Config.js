import firebase from 'firebase';

    var firebaseConfig = {
    apiKey: "AIzaSyA0AAcBrPaxpSDhWz1OFMiPXqCNEbGTrLU",
    authDomain: "pro-60-43c93.firebaseapp.com",
    databaseURL: "https://pro-60-43c93-default-rtdb.firebaseio.com",
    projectId: "pro-60-43c93",
    storageBucket: "pro-60-43c93.appspot.com",
    messagingSenderId: "648307031948",
    appId: "1:648307031948:web:6c4ebb94a00fca8b6260a9"
  };
 
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  export default app.database();