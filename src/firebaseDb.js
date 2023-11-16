import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
apiKey: "AIzaSyCqTB6EoXuv5ENq0aCiUngG9vCKEDHjpwo",
authDomain: "subscriptions-68c77.firebaseapp.com",
projectId: "subscriptions-68c77",
storageBucket: "subscriptions-68c77.appspot.com",
messagingSenderId: "1096575228089",
appId: "1:1096575228089:web:11385b81df1af7de20a368",
};
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();