// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdTfUFd_lcoQOKjwLV4mCSczLypegMPAs",
  authDomain: "approachablebackend.firebaseapp.com",
  projectId: "approachablebackend",
  storageBucket: "approachablebackend.appspot.com",
  messagingSenderId: "332924613398",
  appId: "1:332924613398:web:c608ffe501aa3cd028d637",
  measurementId: "G-D3YBGEZD7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let app;
if (firebase.app.length ==0){
     app = initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export { auth }