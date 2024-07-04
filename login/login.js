

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAS0CCS0GWO3z_FcltqL-qpx6byiRVtoOY",
  authDomain: "qrgen-web.firebaseapp.com",
  projectId: "qrgen-web",
  storageBucket: "qrgen-web.appspot.com",
  messagingSenderId: "293384391551",
  appId: "1:293384391551:web:d275f1661a73795b3be84a"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const submit = document.getElementById("login-btn");
submit.addEventListener("click", function (event) {
  event.preventDefault();

 
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     
      const user = userCredential.user;
      alert("log in...");
      const isLogIn = true;
      
      window.location.href="../home.html"
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage + "\nEnter correct email and password");
      
    });
});




