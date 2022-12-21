import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCAjfZn7_HDPgure2aohSUYKhd4cLLIKdw",
  authDomain: "reminder-app-c35af.firebaseapp.com",
  projectId: "reminder-app-c35af",
  storageBucket: "reminder-app-c35af.appspot.com",
  messagingSenderId: "258365446410",
  appId: "1:258365446410:web:c08f4d2d03f2613864c2f3"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

