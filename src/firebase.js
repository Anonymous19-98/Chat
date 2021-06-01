
import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBbrn1obY6NcP-HhawLzuy-OYf_aCDCUs8",
    authDomain: "unichat-ad00d.firebaseapp.com",
    projectId: "unichat-ad00d",
    storageBucket: "unichat-ad00d.appspot.com",
    messagingSenderId: "967798379270",
    appId: "1:967798379270:web:63fcea45212ab94e7a0487"
  }).auth();