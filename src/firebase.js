// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIcsb9D8VOUlLRIJj8CWNlTBjmd4zT7lU",
    authDomain: "netflix-clone-ffe67.firebaseapp.com",
    projectId: "netflix-clone-ffe67",
    storageBucket: "netflix-clone-ffe67.appspot.com",
    messagingSenderId: "396805738101",
    appId: "1:396805738101:web:06082f1d55ea7157ac323c"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 

  export {auth}; 
  export default db; 
  