// AOS animation init
AOS.init();



// Initialize Textil.js animation on h2 element
const element = document.getElementById("animated-text");
textil(element, {
    type: 'fadeIn',  
    duration: 1500,   
    delay: 500      
});



// EmailJS Contact Form
(function () {
  emailjs.init("q0zjjXk-jclXuMGB8");

  const form = document.getElementById("contactForm");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = form.querySelector('input[name="from_name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // EmailJS settings
    const serviceID = "service_c4znwlg";
    const templateID = "template_c5l9wkq";
    const templateParams = { from_name: name, email, phone, message };

    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="animate-spin mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>Sending...`;

    // Send email
    emailjs.send(serviceID, templateID, templateParams)
      .then(function () {
        alert("Message sent successfully!");
        form.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = "Send Message";
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        alert("Something went wrong. ❌ Please try again later.");
        submitButton.disabled = false;
        submitButton.innerHTML = "Send Message";
      });
  });
})();
