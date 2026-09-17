const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "2348132923120";

  const whatsappMessage =
      `Hello Kull, I'm contacting you through your portfolio.%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});
