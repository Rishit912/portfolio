// Typewriter effect for name
const nameElement = document.getElementById('name');
const nameText = "Rishit Dangi"; // Replace with your actual name
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust speed here (100 ms)
    }
}

// Typewriter effect for about me
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    typeWriter(); // Start typing effect for name

    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// project 
    const projects = {
        frontend: [
           {
            title: "HomesInTheClouds",
            img: "./image3.jpg",
            description: "Homes in the Clouds is a clean, responsive frontend for booking unique stays with a modern and user-friendly design. It provides seamless navigation, property listings, and an engaging travel experience.",
            link: "https://homeintheclouds.netlify.app/"
          },
         
          {
            title: "Plus-care",
            img: "./pluscare1.png",
            description: "The smart appointment system is a web-based platform designed to streamline the process of booking doctor’s appointments. Patients can register, search for doctors, and manage their appointments, while doctors can view schedules and add prescriptions.",
            link: "https://pluscare.jaydipsatani.com/"
          },
          {
            title: "WorkSync",
            img: "./image.png",
            description: "WorkSync connects skilled but uneducated workers with potential employers, helping them find jobs in fields like plumbing, electrical work, and more. It simplifies the job search process for both workers and employers.",
            link: "https://rishit912.github.io/worksync/"
          },

          {
            title: "Bubble-Hit",
            img: "./bubble.png",
            description: "I have created bubble hit game at time of learning the Javascript.Bubble Hit is a fast-paced JavaScript game where players pop colorful bubbles within a 60-second timer. Track your current score and compete for the highest score as bubbles change color with each hit!",
            link: "https://rishit912.github.io/Bubble-hit/"
          },



          
        ],
        uiux: [
          {
            title: "FOOD-ADDA",
            img: "./food_adda.png",
            description: "This is the design of the FOOD-ADDA where people can find the all-vegetarian dishes in the FOOD-ADDA. in this the dishes are available like Gujrati, Punjabi, Chinese, South-Indian and many more.... ",
            link: "https://www.figma.com/design/5zJSsz1CYgbhvcXyC2fGJ2/Food-Adda?node-id=0-1&t=RBdVBHTbGviEEqMr-1"
          },
          {
            title: "WorkSync",
            img: "./worksyncui.png",
            description: "WorkSync connects skilled but uneducated workers with potential employers, helping them find jobs in fields like plumbing, electrical work, and more. It simplifies the job search process for both workers and employers.",
            link: "https://www.figma.com/design/s2YNBRMrSICKmpCeUgiokO/worksync?node-id=0-1&t=qrtDkkjMJB4b8VkM-1"
          }
        ]
      };
      

function renderProjects(type) {
  const container = document.getElementById(type);
  container.innerHTML = `
    <div class="project-container">
      ${projects[type].map(proj => `
        <div class="project-item">
          <h3>${proj.title}</h3>
          <img src="${proj.img}" alt="${proj.title}" />
          <p>${proj.description}</p>
          <a href="${proj.link}" target="_blank">Visit Project</a>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleProjects(section) {
  document.getElementById('frontend').style.display = section === 'frontend' ? 'block' : 'none';
  document.getElementById('uiux').style.display = section === 'uiux' ? 'block' : 'none';

  document.querySelectorAll('.project-toggle').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.project-toggle[onclick*="${section}"]`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("frontend");
  renderProjects("uiux");
  toggleProjects("frontend");
});




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



document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav-menu li a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  });

  

