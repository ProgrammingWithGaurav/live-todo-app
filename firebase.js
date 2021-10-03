const firebaseConfig = {
    apiKey: "AIzaSyAif4jfaXEjQKOvyJF3KPbd5YjQCAvIIsI",
    authDomain: "project-todo-live.firebaseapp.com",
    projectId: "project-todo-live",
    storageBucket: "project-todo-live.appspot.com",
    messagingSenderId: "870563658539",
    appId: "1:870563658539:web:0af20262c62fbc9867a36e",
    measurementId: "G-JP8PDP0W6E"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();