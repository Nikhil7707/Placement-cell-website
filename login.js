
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8ySdcr2uU_RIXH1nq_LS3iqaGAnmuZS8",
    authDomain: "placement-website-bf0da.firebaseapp.com",
    databaseURL: "https://placement-website-bf0da-default-rtdb.firebaseio.com",
    projectId: "placement-website-bf0da",
    storageBucket: "placement-website-bf0da.appspot.com",
    messagingSenderId: "361793555397",
    appId: "1:361793555397:web:283394917ac27f73ac99ac",
    measurementId: "G-R9BSYE8ZYV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const users = [
  {
      email: "22bcs10001@cuchd.in",
      password: "student1",
  },
  {
      email: "22bcs10002@cuchd.in",
      password: "student2",
  },
  {
      email: "22bcs10003@cuchd.in",
      password: "student3",
  },
  {
      email: "22bcs10004@cuchd.in",
      password: "student4",
  },
  {
      email: "22bcs10005@cuchd.in",
      password: "student5",
  },
  
];

// Function to validate login
function validateLogin(email, password) {
  for (let user of users) {
      if (user.email === email && user.password === password) {
          return true;
      }
  }
  return false;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (validateLogin(email, password)) {
      // Redirect to another page upon successful login
      window.location.href = "dashboards.html";
  } else {
      alert("Invalid email or password. Please try again.");
  }
}

// Add event listener to form submit button
document.querySelector('button').addEventListener("click", handleSubmit);
