import Service from '@ember/service';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAThcNHRqIpEq_aX5FbObjryohQWsbkWOg',
  authDomain: 'csci5117-917cd.firebaseapp.com',
  projectId: 'csci5117-917cd',
  storageBucket: 'csci5117-917cd.firebasestorage.app',
  messagingSenderId: '125589701248',
  appId: '1:125589701248:web:55cb485bf7265709b75c65',
  measurementId: 'G-C4SJC6VX3N',
};

// Initialize Firebase
// const analytics = getAnalytics(app);

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
}
