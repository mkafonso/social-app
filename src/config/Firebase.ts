import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDdK8poc1HXymPye6ayJBW10UoDSFgFbgU',
  authDomain: 'social-app-2b2ae.firebaseapp.com',
  projectId: 'social-app-2b2ae',
  storageBucket: 'social-app-2b2ae.appspot.com',
  messagingSenderId: '515638414512',
  appId: '1:515638414512:web:735d37d47911ecb86abf75',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
