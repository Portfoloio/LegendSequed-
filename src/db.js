import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAcS-CjvtmHA_94bL0_NHlEoCIJ4l_bVcI",
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOM,
  // projectId: process.env.PRO_ID,
  // storageBucket: process.env.STOREG_BUCKET,
  // messagingSenderId: process.env.MESS_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASURE_ID,
  authDomain: "contact-form-cb090.firebaseapp.com",
  projectId: "contact-form-cb090",
  storageBucket: "contact-form-cb090.appspot.com",
  messagingSenderId: "458617819756",
  appId: "1:458617819756:web:527e596cd4532ce6c73e49",
  measurementId: "G-W62SPBXLYZ",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
var db = fire.firestore();
export default db;
