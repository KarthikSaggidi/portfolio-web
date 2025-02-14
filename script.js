// Function to show only the selected section
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? "flex" : "none";
    });
}

// Function to show the popup message after form submission
function showPopup(event) {
    event.preventDefault(); // Prevent actual form submission

    let popup = document.getElementById("popup");
    popup.style.display = "block"; // Show popup

    // Clear form inputs after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Hide the popup after 3 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
}

// Function to manually hide the popup (if needed)
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

// By default, show only the home section when the page loads
document.addEventListener("DOMContentLoaded", function () {
    showSection('home');

    // Attach form submit event listener
    document.querySelector(".contact-form").addEventListener("submit", showPopup);
});