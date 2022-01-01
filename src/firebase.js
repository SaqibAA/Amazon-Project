import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDu3ZjCVGx6wbBW-o0p11utsAOWXRhUd-0",
    authDomain: "clone-745d3.firebaseapp.com",
    projectId: "clone-745d3",
    storageBucket: "clone-745d3.appspot.com",
    messagingSenderId: "251517654702",
    appId: "1:251517654702:web:61c887cd33ed643b777f3f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};