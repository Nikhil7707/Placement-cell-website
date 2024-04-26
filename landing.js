// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;
var login_button; // Added login button variable

// Function to initialize variables
function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  login_button = document.querySelector(".login-button"); // Select the login button
}

// Select the <main> element
const main = document.querySelector("main");

// Initialize variables
declare();

// Variable to track dark mode state
let dark = false;

// Function to toggle animation and dark mode
function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  // Toggle dark/light classes based on dark mode state
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  // Add copy class and append to main element
  clone.classList.add("copy");
  main.appendChild(clone);

  // Prevent scrolling while animation is playing
  document.body.classList.add("stop-scrolling");

  // Remove original wrapper after animation ends
  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

// Function to handle events
function events() {
  // Add click event listener to toggle button
  toggle_btn.addEventListener("click", toggleAnimation);
  // Add click event listener to hamburger menu
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
  // Add click event listener to login button
  login_button.addEventListener("click", () => {
    // Redirect to the login page
    window.location.href = "./login.html"; // Replace "login.html" with the actual URL of your login page
    // Replace "login.html" with the actual URL of your login page
  });
}

// Initialize event listeners
events();
