import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAS0CCS0GWO3z_FcltqL-qpx6byiRVtoOY",
  authDomain: "qrgen-web.firebaseapp.com",
  projectId: "qrgen-web",
  storageBucket: "qrgen-web.appspot.com",
  messagingSenderId: "293384391551",
  appId: "1:293384391551:web:d275f1661a73795b3be84a",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const email = user.email;
    const username = document.getElementById('username');
    username.innerText = email;

  } else {
    // User is signed out
    console.log("User is not signed in");
  }
});


