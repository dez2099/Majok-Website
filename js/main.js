(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("open");
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navList.classList.remove("open");
      });
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const messageEl = document.getElementById("form-message");
      const name = contactForm.querySelector("#name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const subject = contactForm.querySelector("#subject").value.trim();
      const message = contactForm.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        showFormMessage(messageEl, "Please fill in all required fields.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showFormMessage(messageEl, "Please enter a valid email address.", "error");
        return;
      }

      showFormMessage(
        messageEl,
        "Thank you, " + name + "! Your message has been received. I'll get back to you soon.",
        "success"
      );
      contactForm.reset();
    });
  }

  function showFormMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.className = "form-message " + type;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();
