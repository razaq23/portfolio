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


    
