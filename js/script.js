
// caroursle animation and button trigger
  const carousel = document.getElementById('carousel');
  const images = carousel.children;
  let index = 0;

  function updateCarousel() {
    const offset = -index * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Manual navigation
  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Auto slide every 4 seconds
  setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
  }, 4000);

  // Recalculate on resize
  window.addEventListener('resize', updateCarousel);
