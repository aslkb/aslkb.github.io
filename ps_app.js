// Show a greeting in the browser console
console.log("Welcome to Kamal's profile!");

// Add confirmation popups for contact links
document.addEventListener("DOMContentLoaded", function () {
  const mailLink = document.querySelector("a[href^='mailto:']");
  const linkedinLink = document.querySelector("a[href*='linkedin.com']");

  if (mailLink) {
    mailLink.addEventListener("click", function (e) {
      const confirmMail = confirm("Do you want to send an email to Kamal?");
      if (!confirmMail) e.preventDefault();
    });
  }

  if (linkedinLink) {
    linkedinLink.addEventListener("click", function (e) {
      const confirmLinkedIn = confirm("Do you want to visit Kamal's LinkedIn profile?");
      if (!confirmLinkedIn) e.preventDefault();
    });
  }
});