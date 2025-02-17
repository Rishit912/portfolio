

// navigation bar javascript for humberger menu open and close
document.getElementById('menuIcon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menuIcon');
    
    // Toggle menu open/close
    menu.classList.toggle('menu-open');
    menuIcon.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        var menuIcon = document.getElementById('menuIcon');

        // Close menu
        menu.classList.remove('menu-open');
        menuIcon.classList.remove('open');
    });
});
// navigation bar javascript for humberger menu open and close




document.addEventListener("DOMContentLoaded", function () {
    const typewriterElement = document.getElementById("typewriter");
    const text = typewriterElement.textContent.trim(); 
    
    typewriterElement.textContent = ""; 
    typewriterElement.style.visibility = "hidden"; 

    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            typewriterElement.style.visibility = "visible"; 
            typewriterElement.classList.add("blinking");
            setTimeout(type, 100);
        } else {
            typewriterElement.classList.remove("blinking"); 
            typewriterElement.style.visibility = "visible"; 
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="#Portfolio"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#Portfolio').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center'
        });
    });
});


// emailjs 

// EmailJS integration
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("dUx0kHekaic6WXHUU"); // Replace with your actual EmailJS User ID

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Send email using EmailJS
        emailjs.send("service_xekcl78", "template_82jxrwe", formData)
            .then(function (response) {
                alert("✅ Message sent successfully!");
                console.log("EmailJS Response:", response);
                document.querySelector("form").reset(); // Clear the form after success
            }, function (error) {
                alert("❌ Failed to send message. Try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});

