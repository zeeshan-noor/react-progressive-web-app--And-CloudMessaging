
 importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyAMVHlltzULapJ61WNbrfvqECTsDtpvZhs",
    authDomain: "notificationapp-43bd3.firebaseapp.com",
    databaseURL: "https://notificationapp-43bd3.firebaseio.com",
    projectId: "notificationapp-43bd3",
    storageBucket: "notificationapp-43bd3.appspot.com",
    messagingSenderId: "310611745612",
    appId: "1:310611745612:web:19d063ed7616df07a1cde9"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging();
