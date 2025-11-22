var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// Slider script
const slides = document.querySelectorAll('.slide');
  const radios = document.querySelectorAll('input[type="radio"]');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.opacity = 0;
    slides[n].style.opacity = 1;
    currentSlide = n;
    // Update the state of the radio buttons
    radios[currentSlide].checked = true;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  // Automatically switch slides every 3 seconds
  setInterval(nextSlide, 3000);

  // Add event listeners to radio buttons
  radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
      showSlide(index);
    });
  });