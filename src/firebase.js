import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD5NOgG9S2gbiy6UEZ_IeV43P3_hx2dOxQ",
  authDomain: "dirty-ab.firebaseapp.com",
  projectId: "dirty-ab",
  storageBucket: "dirty-ab.appspot.com",
  messagingSenderId: "710262823952",
  databaseURL: "https://dirty-ab-default-rtdb.firebaseio.com/",
  appId: "1:710262823952:web:66091dab09a93b1eb43e95",
};

firebase.initializeApp(config);
export default firebase;
