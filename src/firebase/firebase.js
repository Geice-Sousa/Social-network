// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3qBNl0x8mvW_8i4cANa7Puu_dNgFtvp4',
  authDomain: 'maesevinhos-b065f.firebaseapp.com',
  projectId: 'maesevinhos-b065f',
  storageBucket: 'maesevinhos-b065f.appspot.com',
  messagingSenderId: '1049441455311',
  appId: '1:1049441455311:web:16a274704bd6fea3eefbba',
  measurementId: 'G-MDYYFSC961',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
