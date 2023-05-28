const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    if (i === n) {
      slides[i].classList.add('active');
    } else {
      slides[i].classList.remove('active');
    }
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

showSlide(currentSlide);
