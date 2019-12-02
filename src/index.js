import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

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

  firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
