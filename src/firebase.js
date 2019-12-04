import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/firestore';
// import 'firebase/storage';


const config = {
    apiKey: "AIzaSyAGs_3zJG6k1RzUqh4iiVsU4s6LO064A_E",
    authDomain: "outreached-894a0.firebaseapp.com",
    databaseURL: "https://outreached-894a0.firebaseio.com",
    projectId: "outreached-894a0",
    storageBucket: "outreached-894a0.appspot.com",
    messagingSenderId: "1007937630804",
    appId: "1:1007937630804:web:eff0070dd940eccc4bf3c1",
    measurementId: "G-CXMK64GKWM"
  };
  
 firebase.initializeApp(config);
//  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;