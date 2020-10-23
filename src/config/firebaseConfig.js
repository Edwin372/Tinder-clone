import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
const firebaseConfig = {
   apiKey: "AIzaSyBCvK6MqV0DkJ5pfY2px9v6Ybdcew9jPVs",
   authDomain: "the-nerd-ba273.firebaseapp.com",
   databaseURL: "https://the-nerd-ba273.firebaseio.com",
   projectId: "the-nerd-ba273",
   storageBucket: "the-nerd-ba273.appspot.com",
   messagingSenderId: "832986395106",
   appId: "1:832986395106:web:821abc4e22181fb89189bb",
   measurementId: "G-58845PL94D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// firebase.firestore().settings({timestampsInSnapshots: true})
export default firebase
