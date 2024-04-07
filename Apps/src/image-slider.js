document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#slider-container #slides img");
  const dotsContainer = document.querySelector("#slider-container .dots");
  let slideIndex = 0;
  let intervalId = null;

  initializeSlider();

  function initializeSlider() {
    if (slides.length > 0) {
      slides[slideIndex].classList.remove("hidden");
      slides[slideIndex].classList.add("display");
      intervalId = setInterval(next, 3000);
      dotClicked();
      setupButtons();
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    slides.forEach((slide) => {
      slide.classList.remove("display");
      slide.classList.add("hidden");
    });
    slides[slideIndex].classList.add("display");
    slides[slideIndex].classList.remove("hidden");
    updateDots();
  }

  function prev() {
    clearInterval(intervalId);
    intervalId = setInterval(next, 3000);
    slideIndex--;
    showSlide(slideIndex);
  }

  function next() {
    clearInterval(intervalId);
    intervalId = setInterval(next, 3000);
    slideIndex++;
    showSlide(slideIndex);
  }

  function dotClicked() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        clearInterval(intervalId);
        intervalId = setInterval(next, 3000);
      });
    });
  }

  function setupButtons() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    prevButton.addEventListener("click", () => prev());
    nextButton.addEventListener("click", () => next());
  }
});
