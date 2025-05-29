"use strict";

////////////////////Form Data Handler ////////////////////////
const formData = document.getElementById("contact-form");

formData.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("clicked");

  emailjs.sendForm("service_4jqymuz", "template_xsreg9v", this).then(
    () => {
      showStatusMessage("Message sent successfully!", "success");
      this.reset(); // Clear form
    },
    (error) => {
      console.error("EmailJS Error:", error);
      showStatusMessage("Something went wrong. Please try again.", "error");
    }
  );
});

function showStatusMessage(message, type) {
  const oldMessage = document.querySelector("#contact-form .status-message");
  if (oldMessage) {
    oldMessage.remove();
  }
  const statusMessage = document.createElement("p");
  statusMessage.classList.add("status-message", type);
  statusMessage.innerHTML = message;
  formData.appendChild(statusMessage);
  setTimeout(() => {
    statusMessage.remove();
  }, 10000);
}

(function () {
  emailjs.init("I5POYas4SHbw8DxcW"); // Replace with your EmailJS Public Key
})();

///////////////////// Sticky Nav Bar /////////////////////////

const header = document.querySelector(".homeMain");
const navbar = document.getElementById("navbar");
const height = navbar.getBoundingClientRect().height;

const navhandler = function (entries) {
  const [entry] = entries;
  //   console.log(entries);
  //   console.log(entry);
  if (!entry.isIntersecting) {
    navbar.classList.add("stickyNav");
  } else {
    navbar.classList.remove("stickyNav");
  }
};

const observer = new IntersectionObserver(navhandler, {
  root: null,
  threshold: 0,
  rootMargin: `${height}px`,
});

observer.observe(header);

//////////////////////////// Btn Scrolling another Section //////////////////////////

const HeroBtn = document.getElementById("HeroBtn");
const project = document.getElementById("project");
const contactBtn = document.getElementById("contactBtn");
const contact = document.getElementById("contact");

HeroBtn.addEventListener("click", function (events) {
  events.preventDefault();
  project.scrollIntoView({
    behavior: "smooth",
  });
});

contactBtn.addEventListener("click", function (events) {
  events.preventDefault();
  contact.scrollIntoView({
    behavior: "smooth",
  });
});
/////////////////////// NavBar Scrolling/////////////////////////////

// const navcontainer = document.querySelector(".navcontainer");
// const navUl = document.querySelector(".nav");
const navlist = document.querySelectorAll(".nav-link");

navlist.forEach((items) => {
  items.addEventListener("click", function (events) {
    events.preventDefault();
    const id = this.getAttribute("href");
    const ids = document.querySelector(id);
    ids.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "./Img/resume.pdf"; // Replace with your actual CV path
  link.download = "Faruk_Hundekari_CV.pdf"; // Desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
