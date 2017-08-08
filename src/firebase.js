import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDsfwdavluayOBZ50K_PaQuhPu6HRmbD0E",
  authDomain: "family-tasks-9b5b6.firebaseapp.com",
  databaseURL: "https://family-tasks-9b5b6.firebaseio.com",
  projectId: "family-tasks-9b5b6",
  storageBucket: "",
  messagingSenderId: "1024436103572"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
