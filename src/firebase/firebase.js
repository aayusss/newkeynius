import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD_6OgC1qItxl13i2JEH2vVcuz9Ifmb0cg',
  authDomain: 'keynius-3f40d.firebaseapp.com',
  databaseURL: 'https://keynius-3f40d-default-rtdb.firebaseio.com',
  projectId: 'keynius-3f40d',
  storageBucket: 'keynius-3f40d.appspot.com',
  messagingSenderId: '143696395700',
  appId: '1:143696395700:web:bf3d4f8b8b25ee6f9686e1',
  measurementId: 'G-VN0CLK2HMT',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };
