// Initialize EmailJS
emailjs.init("Yw3Lmvoa3h9Z11VzI"); // replace with your public key

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm("service_0yl8gie", "template_razaq2355", this)
        .then(function() {
            alert("Message sent successfully! ✅");
            contactForm.reset();
        }, function(error) {
            alert("Oops... something went wrong 😅", error);
        });
});




// Smooth scroll
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Update active link on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  
  sections.forEach(sec => {
    const sectionHeight = sec.offsetHeight;
    const sectionTop = sec.offsetTop - 100;
    const id = sec.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      links.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if(activeLink) activeLink.classList.add("active");
    }
  });
});


// Simple script to handle header scroll effect
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

     // Simple script to handle header scroll effect
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });


// Initialize Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2.4,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "repulse" },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,      // distance from mouse for linking
        "line_linked": {
          "opacity": 0.8
        }
      },
      "bubble": {
        "distance": 200,      // distance where bubble effect happens
        "size": 6,            // enlarged size
        "duration": 2,        // how long effect lasts
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,      // repulse distance
        "duration": 0.6
      },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true
});
