// =========================================================
// MUSA TAILORING — SCRIPT
// Handles: mobile menu toggle, closing menu on link click,
// contact form submission (opens WhatsApp with the message),
// and the footer copyright year.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

  // ---------- Mobile menu toggle ----------
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu after a nav link is tapped
  var navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---------- Contact form: sends the enquiry via WhatsApp ----------
  // Since this is a static site with no backend, the form builds a
  // WhatsApp message from what the customer typed and opens a chat
  // with the business number. Replace the WHATSAPP_NUMBER below if
  // the client's WhatsApp number changes.
  var WHATSAPP_NUMBER = "2348133172127";

  var form = document.getElementById("contact-form");
  var formNote = document.getElementById("form-note");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
      formNote.textContent = "Please fill in every field before sending.";
      return;
    }

    var text =
      "Hello Musa Tailoring, my name is " + name +
      ". My phone number is " + phone +
      ". " + message;

    var whatsappUrl =
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);

    formNote.textContent = "Opening WhatsApp to send your message…";
    window.open(whatsappUrl, "_blank");
    form.reset();
  });

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();

});
