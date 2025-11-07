// Footer Year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.querySelectorAll("img").length;
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 5000); // change every 5 seconds
});


// Samples
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.nextElementSibling;
      text.style.display = text.style.display === 'block' ? 'none' : 'block';
      btn.textContent = text.style.display === 'block' ? 'Hide Sample' : 'View Before/After';
    });
  });
});
