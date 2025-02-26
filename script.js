document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form Submission Handling
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "red";
            return;
        }

        responseMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
        responseMessage.style.color = "green";

        form.reset();
    });
});
