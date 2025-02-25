document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    alert("Your message has been sent!");
    this.reset(); // Reset form fields
});
