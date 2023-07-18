
//carousel
const carouselSimular = document.getElementById("carousel-simular")
const container = document.getElementById("container")


// select next slide button
// const nextSlide = document.querySelector(".btn-next");
const nextSlide = document.getElementById("next")
const afterSlide = document.getElementById("after")
const slides = document.querySelectorAll(".slide");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
console.log(maxSlide);
// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
;})