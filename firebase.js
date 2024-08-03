// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApg9W14a8Rqp1qBs-_kuysrmKOEYfSuRU',
  authDomain: 'pantry-8f918.firebaseapp.com',
  projectId: 'pantry-8f918',
  storageBucket: 'pantry-8f918.appspot.com',
  messagingSenderId: '16033923534',
  appId: '1:16033923534:web:58f101fd7d7cc3bae5ab9f',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
