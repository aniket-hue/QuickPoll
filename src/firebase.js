import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjyvIGk_B1jtMPzVf2GrsGF30TWea9cQE",
  authDomain: "quickpoll-cd209.firebaseapp.com",
  databaseUrl: "https://quickpoll-cd209-default-rtdb.firebaseio.com/",
  projectId: "quickpoll-cd209",
  storageBucket: "quickpoll-cd209.appspot.com",
  messagingSenderId: "485306958032",
  appId: "1:485306958032:web:77068624213f2d41bc9ed5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
