const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const Phone = document.getElementById("Phone");
const Date = document.getElementById("Date");
const message = document.getElementById("message");
// const downloadResume = document.getElementsByClassName("downloadButton");

const downloadResume = document.querySelector(".downloadButton");
const downloadResumes = document.querySelector(".downloadButtons");


const home = document.getElementById("home");
const intro = document.getElementById("intro");
const about = document.getElementById("about");
const work = document.getElementById("services");
const contact = document.getElementById("form");

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const smallnav= document.querySelector("#smallnav");

setTimeout(function () {
  document.getElementById("loaderContainer").style.display = "none";
  document.body.style.overflow = "visible"; // Restore scroll
}, 5000);

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("hidden");
});

smallnav.addEventListener("click", (e) => {
  // e.preventDefault();
  menu.classList.toggle("hidden");
});


function sendEmail() {
  const bodyMessage = `Full Name :${fullName.value} <br> Phone:${Phone.value}<br> Email:${email.value}</br> Date:${Date.value}<br> Message:${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sidedunp@gmail.com",
    Password: "C29737DE1EA7990DEB57BC48C6968C5873F8",
    To: "sidedunp@gmail.com",
    From: "sidedunp@gmail.com",
    Subject: "This is the subject",
    Body: bodyMessage,
  }).then(() => alert("Message send"));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

downloadResume.addEventListener("click", function () {
  // Create a link element
  const link = document.createElement("a");

  // Set the href attribute to the existing PDF file
  link.href = "SIDDHARTHA_RAUT_CV.pdf"; // Set the correct path to your existing PDF file

  // Open the PDF file in a new tab or window
  link.target = "_blank";

  // Trigger a click event to open the PDF
  link.click();
});

downloadResumes.addEventListener("click", function () {
  // Create a link element
  const link = document.createElement("a");

  // Set the href attribute to the existing PDF file
  link.href = "SIDDHARTHA_RAUT_CV.pdf"; // Set the correct path to your existing PDF file

  // Open the PDF file in a new tab or window
  link.target = "_blank";

  // Trigger a click event to open the PDF
  link.click();
});



// home.addEventListener("click", function (e) {
//   head.scrollIntoView({ behavior: "smooth" });
// });

// about.addEventListener("click", function (e) {
//   intro.scrollIntoView({ behavior: "smooth" });
// });

// work.addEventListener("click", function (e) {
//   services.scrollIntoView({ behavior: "smooth" });
// });

// contact.addEventListener("click", function (e) {
//   form.scrollIntoView({ behavior: "smooth" });
// });


document.querySelectorAll(".nav__link").forEach(function (el){
el.addEventListener("click", function (e) {
  e.preventDefault();
  const id=this.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}) 
})