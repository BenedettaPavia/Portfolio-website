document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuModal = document.getElementById("menuModal");
  const closeMenu = document.getElementById("closeMenu");

  // ✅ Aprire la modale
  menuToggle.addEventListener("click", () => {
    menuModal.classList.add("active");
  });

  // ✅ Chiudere la modale
  closeMenu.addEventListener("click", () => {
    menuModal.classList.remove("active");
  });

  // ✅ Chiudere la modale cliccando fuori dalla modale
  window.addEventListener("click", (e) => {
    if (e.target === menuModal) {
      menuModal.classList.remove("active");
    }
  });
});

  // 🔹 Scroll fluido per i link "About Me"
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
            top: targetElement.offsetTop - 50, // 🔥 Offset per evitare che vada troppo in alto
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
        // 🔹 Se la bubble è già aperta, chiudila
        if (bubble.classList.contains("active")) {
          bubble.classList.remove("active");
        } else {
          // 🔹 Chiudi tutte le altre bubble prima di aprire questa
          bubbles.forEach(b => b.classList.remove("active"));
          bubble.classList.add("active");
        }
      });
    });
  });

  