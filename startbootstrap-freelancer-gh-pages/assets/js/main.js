document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(".fade-in, .fade-in-delay, .fade-in-delay2, .fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  animated.forEach(el => observer.observe(el));

  // Navbar shrink
  const nav = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.classList.add("shrink");
    else nav.classList.remove("shrink");
  });
});
