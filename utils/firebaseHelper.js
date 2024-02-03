import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

let firebaseApp;

export const getFirebaseApp = () => {
  // If the Firebase app is already initialized, return it
  if (firebaseApp) {
    return firebaseApp;
  }

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCI-sSNgdceVNU2jM8hL2Dn1wH8xvD487U",
    authDomain: "authfirebasescholapp.firebaseapp.com",
    databaseURL: "https://authfirebasescholapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authfirebasescholapp",
    storageBucket: "authfirebasescholapp.appspot.com",
    messagingSenderId: "921787907167",
    appId: "1:921787907167:web:7d2a8f6a8ee231a55cafea",
    measurementId: "G-DKL1NTXF9N"
  };

  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  // Initialize Firebase Auth with React Native persistence
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  // Store the initialized app to avoid reinitialization
  firebaseApp = app;

  return app;
};