document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-in, .fade-in-delay, .fade-in-delay2, .fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));

  // Navbar shrink effect
  const nav = document.querySelector("#mainNav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) nav.classList.add("shrink");
    else nav.classList.remove("shrink");
  });
});
