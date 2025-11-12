// === Fade-in animacija ===
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // 
});

// === meni ===
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// === Animacija sekcije Why US?===
document.addEventListener("DOMContentLoaded", () => {
  const whySection = document.querySelector(".why-us");
  if (!whySection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          whySection.classList.add("visible");
        } else {
          whySection.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(whySection);
});

 document.querySelectorAll('.btn-scroll').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(button.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

 // Kada se klikne na link u meniju
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const parent = link.parentElement;
    const hasSubmenu = parent.querySelector('.dropdown-menu');

    // Ako link nema podmeni
    if (!hasSubmenu) {
      document.querySelector('.nav-links').classList.remove('active');
    } else {
      // Ako IMA podmeni 
      e.preventDefault();
      parent.classList.toggle('active');
    }
  });
});