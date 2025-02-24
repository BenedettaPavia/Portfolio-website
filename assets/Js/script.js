document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuModal = document.getElementById("menuModal");
  const closeMenu = document.getElementById("closeMenu");

  menuToggle.addEventListener("click", () => {
    menuModal.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    menuModal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === menuModal) {
      menuModal.classList.remove("active");
    }
  });
});

  document.querySelectorAll('a[href="#about-me"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#about-me').scrollIntoView({ behavior: 'smooth' });
      navbarMenu.classList.remove('active');
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, 
            behavior: "smooth"
          });
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const bubbles = document.querySelectorAll(".bubble");
  
    bubbles.forEach(bubble => {
      bubble.addEventListener("click", () => {
    
        if (bubble.classList.contains("active")) {
          bubble.classList.remove("active");
        } else {
         
          bubbles.forEach(b => b.classList.remove("active"));
          bubble.classList.add("active");
        }
      });
    });
  });

  