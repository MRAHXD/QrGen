import { getAuth , signOut ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAS0CCS0GWO3z_FcltqL-qpx6byiRVtoOY",
  authDomain: "qrgen-web.firebaseapp.com",
  projectId: "qrgen-web",
  storageBucket: "qrgen-web.appspot.com",
  messagingSenderId: "293384391551",
  appId: "1:293384391551:web:d275f1661a73795b3be84a",
};
const app = initializeApp(firebaseConfig);
const LogoutBtn = document.getElementById('log-out-btn');
const username = document.getElementById('username');

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
    LogoutBtn.style.display="none";
    username.innerText="login";
    username.href="index.html";
  }
});

// log out

LogoutBtn.addEventListener("click", function(event) {
  event.preventDefault();

  signOut(auth).then(() => {
    // Sign-out successful.
    alert("log out successfully");

  }).catch((error) => {
    // An error happened.
  });
})

  


const container = document.querySelector(".container");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submit");
const downloadBtn = document.getElementById("download");
const sizeOptions = document.querySelector(".sizeOptions");
const BGColor = document.getElementById("BGColor");
const FGColor = document.getElementById("FGColor");

let QR_Code;
let sizeChoice, BGColorChoice, FGColorChoice, qrCodeDataURL;

//Set size
sizeOptions.addEventListener("change", () => {
  sizeChoice = sizeOptions.value;
});

//Set background color
BGColor.addEventListener("input", () => {
  BGColorChoice = BGColor.value;
});

//Set foreground color
FGColor.addEventListener("input", () => {
  FGColorChoice = FGColor.value;
});

//Format input
const inputFormatter = (value) => {
  value = value.replace(/[^a-z0-9A-Z]+/g, "");
  return value;
};

submitBtn.addEventListener("click", async () => {
  container.innerHTML = "";
  //QR code generation
  QR_Code = await new QRCode(container, {
    text: userInput.value,
    width: sizeChoice,
    height: sizeChoice,
    colorDark: FGColorChoice,
    colorLight: BGColorChoice,
  });

  // Store the data URL for later use
  qrCodeDataURL = container.firstChild.toDataURL("image/png");
  downloadBtn.classList.remove("hide");
  
});

var qrcode = new QRCode(document.getElementById("saved1"), {
  text: "https://google.com",
  width: 200,
  height: 200,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});
 


downloadBtn.addEventListener("click", () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = qrCodeDataURL;
  downloadLink.download = `${inputFormatter(userInput.value)}QR.png`;
  downloadLink.click();
});

userInput.addEventListener("input", () => {
  if (userInput.value.trim().length < 1) {
    submitBtn.disabled = true;
    downloadBtn.href = "";
    downloadBtn.classList.add("hide");
  } else {
    submitBtn.disabled = false;
  }
});

window.onload = () => {
  container.innerHTML = "";
  sizeChoice = 100;
  sizeOptions.value = 100;
  userInput.value = "";
  BGColor.value = BGColorChoice = "#ffffff";
  FGColor.value = FGColorChoice = "#377dff";
  downloadBtn.classList.add("hide");
  submitBtn.disabled = true;
};


 








