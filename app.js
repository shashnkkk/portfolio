// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controls");
// const sectBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");

// function PageTransistions() {
//   //Button Click Active class
//   for (let i = 0; i < sectBtn.length; i++) {
//     sectBtn[i].addEventListener("click", function () {
//       let currentBtn = document.querySelectorAll(".active-btn");
//       currentBtn[0].className = currentBtn[0].className.replace(
//         "active-btn",
//         " "
//       );
//       this.className += " active-btn";
//     });
//   }

//   //sections active
//   allSections.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
//     if (id) {
//       //remove selected  from other buttons
//       sectBtns.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       e.target.classList.add("active");
//       //hide other sections
//       sections.forEach((section) => {
//         section.classList.remove("active");
//       });
//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });
//   document.querySelector(".theme-btn").addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");
//   });
// }

// PageTransistions();

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$("#ripple").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,
});

$(window).on("load", function () {
  setTimeout(function () {
    $(".loading").hide();
  }, 5);
});

$(document).ready(function () {
  setTimeout(function () {
    $("#loading").hide();
  }, 3000);
});

const firebaseConfig = {
  apiKey: "AIzaSyANxe10sLblvr-7sZmCLDDLqx0EQdkVCQg",
  authDomain: "contactform-46ef8.firebaseapp.com",
  projectId: "contactform-46ef8",
  storageBucket: "contactform-46ef8.appspot.com",
  databaseURL: "https://contactform-46ef8-default-rtdb.firebaseio.com/",
  messagingSenderId: "381827487116",
  appId: "1:381827487116:web:e57050282180a1232ef2a9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference message collection
const messagesRef = firebase.database().ref("contactform");

//listen for form submit
document.getElementById("contactform").addEventListener("submit", SubmitForm);

//submit form
function SubmitForm(e) {
  e.preventDefault();

  //get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var subject = getInputVal("subject");
  var message = getInputVal("message");

  //save message
  saveMessage(name, email, subject, message);

  //enable alert
  document.querySelector(".alert").style.display = "block";
  //document.querySelector(".alert");
  document.getElementById("contactform").reset();

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);
}

document.getElementById("contactform").reset();
$(".close").click(function () {
  $(this).parent(".alert").fadeOut();
});

//functions to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save mesaages to firebase

function saveMessage(name, email, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}

//typing effect

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "a Student @ Vellore Institute of Technology",
  "a Passionate Web Developer",
  "the Hakuna Matara guy",
  "a F around Find out guy",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
