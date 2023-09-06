importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyB0luEf_4OQksO3wURFKLt1c4PTGST7qaQ",
    authDomain: "evento-push-notification.firebaseapp.com",
    projectId: "evento-push-notification",
    storageBucket: "evento-push-notification.appspot.com",
    messagingSenderId: "493782999000",
    appId: "1:493782999000:web:46865df9871fcbc1901cad",
    databaseURL:"https://evento-push-notification-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});