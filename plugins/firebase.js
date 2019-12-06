import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD0ovV2QUtxyZL8t8AKV-S3IbS1WjT0rx0",
    authDomain: "portfolio-to.firebaseapp.com",
    databaseURL: "https://portfolio-to.firebaseio.com",
    projectId: "portfolio-to",
    storageBucket: "",
    messagingSenderId: "106185291327",
    appId: "1:106185291327:web:944fcc85087193809a6a8a",
    measurementId: "G-VG5ZDY72T2"
  })
}

export default firebase