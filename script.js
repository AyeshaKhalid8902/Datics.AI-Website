/*const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Currently no JS logic required
// This page is static FAQ list like your image

// No JS required for this static CTA section
// No JS needed for UI
// Add validation or backend integration later if required
// No JS needed for UI
// Simple animation effect on load
document.querySelectorAll(".stat-box").forEach((box, index) => {
  box.style.opacity = 0;
  box.style.transform = "translateY(20px)";

  setTimeout(() => {
    box.style.transition = "0.6s ease";
    box.style.opacity = 1;
    box.style.transform = "translateY(0)";
  }, index * 200);
});
// Simple fade-in animation
const content = document.querySelector(".content");

content.style.opacity = 0;
content.style.transform = "translateY(20px)";

window.addEventListener("load", () => {
  content.style.transition = "0.8s ease";
  content.style.opacity = 1;
  content.style.transform = "translateY(0)";
});
// Simple fade-in animation
const content = document.querySelector(".content");

content.style.opacity = 0;
content.style.transform = "translateY(20px)";

window.addEventListener("load", () => {
  content.style.transition = "0.8s ease";
  content.style.opacity = 1;
  content.style.transform = "translateY(0)";
});*/
// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}


// ===== STAT BOX ANIMATION =====
document.querySelectorAll(".stat-box").forEach((box, index) => {
  box.style.opacity = 0;
  box.style.transform = "translateY(20px)";

  setTimeout(() => {
    box.style.transition = "0.6s ease";
    box.style.opacity = 1;
    box.style.transform = "translateY(0)";
  }, index * 200);
});


// ===== CONTENT FADE-IN (SAFE) =====
window.addEventListener("load", () => {
  const content = document.querySelector(".content");

  if (content) {
    content.style.opacity = 0;
    content.style.transform = "translateY(20px)";

    setTimeout(() => {
      content.style.transition = "0.8s ease";
      content.style.opacity = 1;
      content.style.transform = "translateY(0)";
    }, 100);
  }
});
document.addEventListener("DOMContentLoaded", function () {

  const ideaBtn = document.querySelector(".cta-box .btn");

  if (ideaBtn) {
    ideaBtn.addEventListener("click", function () {
      alert("Thanks for sharing your idea! Our team will contact you soon 🚀");
    });
  }

});

