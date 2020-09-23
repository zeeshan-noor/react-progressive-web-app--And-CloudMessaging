import firebase from 'firebase';

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
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
    if (permission === "granted") {
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log("Token=>");
                console.log(currentToken);
            } else {

                console.log('No Instance ID token available. Request permission to generate one.');

            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);

        });
    }
})
}
