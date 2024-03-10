document.addEventListener('DOMContentLoaded', function() {
  const carouselInner = document.querySelector('.carousel-inner');
  const images = carouselInner.querySelectorAll('img');
  const imageWidth = images[0].clientWidth; // Assuming all images have the same width
  const totalWidth = images.length * imageWidth;
  let currentIndex = 0;

  function updateSlidePosition() {
    carouselInner.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  function slideNext() {
    currentIndex++;
    if (currentIndex * imageWidth >= totalWidth) {
      currentIndex = 0;
    }
    updateSlidePosition();
  }

  setInterval(slideNext, 2000); // Change slide every 2 seconds (adjust as needed)
});


