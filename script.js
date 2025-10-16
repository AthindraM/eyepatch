// Button alert for CTA
document.getElementById("get-started").addEventListener("click", () => {
  alert("EyePatch is coming soon! Stay tuned.");
});

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);
sections.forEach((section) => observer.observe(section));

// Sticky header background change
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
