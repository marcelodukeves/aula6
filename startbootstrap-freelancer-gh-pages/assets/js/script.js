document.addEventListener("DOMContentLoaded", () => {

  /* Animações Scroll */
  const items = document.querySelectorAll(".fade-in, .fade-in-delay, .fade-in-delay2, .fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));

  /* Navbar Shrink */
  const nav = document.querySelector("#mainNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("shrink", window.scrollY > 60);
  });

  /* Carrossel Moderno */
  const track = document.querySelector(".carousel-track");
  const itemsCarousel = document.querySelectorAll(".carousel-item");
  const prev = document.querySelector(".carousel-btn.prev");
  const next = document.querySelector(".carousel-btn.next");

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(${-index * 330}px)`;
  }

  next.addEventListener("click", () => {
    if (index < itemsCarousel.length - 1) index++;
    updateCarousel();
  });

  prev.addEventListener("click", () => {
    if (index > 0) index--;
    updateCarousel();
  });

});
