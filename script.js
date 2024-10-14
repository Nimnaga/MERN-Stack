// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demo

    const email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for subscribing with " + email);
    }
});
