"use strict";

const menuIcon = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const homeLink = document.querySelector('.navbar a[href="#home"]');
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("body>section");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});

// Add event listener for the "Home" link
homeLink.addEventListener("click", () => {
  closeNavbar();
});

// Add event listener for all navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNavbar();
  });
});

// Function to close the navbar on small screens
function closeNavbar() {
  navbar.classList.remove("active");
}

// Supposons que vous ayez déjà défini les variables sections et navlinks ailleurs dans le code.

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // remove toggle icon and navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
  console.log('Y');
};
