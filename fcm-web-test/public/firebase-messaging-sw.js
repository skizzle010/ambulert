// Import the functions you need from the SDKs you need
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCkprT7Bsfh3HK85ylaEzC6dWs8riW54tA",
  authDomain: "ambulert-5f13d.firebaseapp.com",
  projectId: "ambulert-5f13d",
  storageBucket: "ambulert-5f13d.appspot.com",
  messagingSenderId: "761455048703",
  appId: "1:761455048703:web:8241452bead1350c03d9ca",
  measurementId: "G-EPW1Q09DCQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
