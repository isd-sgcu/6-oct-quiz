// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu29sHs825tgProsgEhMYsdRJ6jHzp34w',
  authDomain: 'oct-quiz.firebaseapp.com',
  projectId: 'oct-quiz',
  storageBucket: 'oct-quiz.appspot.com',
  messagingSenderId: '838298301962',
  appId: '1:838298301962:web:c71911ec4343d2e57dd1f3',
  measurementId: 'G-9M3RZQMV91',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
