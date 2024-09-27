// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqMLxpVxAnJshkvT7kwdddZNbVoS5q-h0',
  authDomain: 'authdos-fb03c.firebaseapp.com',
  projectId: 'authdos-fb03c',
  storageBucket: 'authdos-fb03c.appspot.com',
  messagingSenderId: '122056191552',
  appId: '1:122056191552:web:952665ec5a847e547079a5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $auth = getAuth(app)

export { $auth }
