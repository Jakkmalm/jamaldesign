import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB_2m4ArlYvWoVxp3vT4e_yYKGC-eCAWnE",
    authDomain: "jamaltest-df3ae.firebaseapp.com",
    projectId: "jamaltest-df3ae",
    storageBucket: "jamaltest-df3ae.appspot.com",
    messagingSenderId: "461347002500",
    appId: "1:461347002500:web:9d3899b82a1f2bed058ad1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp; 

  export { timestamp };
  export default firebaseApp.firestore();