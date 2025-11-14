const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);

let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Auto play (opcional)
setInterval(() => {
  index = (index + 1) % items.length;
  updateCarousel();
}, 5000);
