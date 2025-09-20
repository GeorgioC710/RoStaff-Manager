// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC5PniOIppaKSGr8MdNibstHuJMpMnJZCE",
  authDomain: "rostaff-manager.firebaseapp.com",
  projectId: "rostaff-manager",
  storageBucket: "rostaff-manager.firebasestorage.app",
  messagingSenderId: "453636756038",
  appId: "1:453636756038:web:259a20fbc0f5e8e4df7047",
  measurementId: "G-0CKEQEBFJK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup function
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("status").innerText = "Account created!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("status").innerText = "Logged in!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}

