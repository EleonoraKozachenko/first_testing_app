let slideIndex = 0;
showSlide(slideIndex);
let timer;

const prev = document.getElementById("prev");
const loop = document.getElementById("loop");
const pause = document.getElementById("pause");
const next = document.getElementById("next");

prev.addEventListener("click", () => showNext(-1));

next.addEventListener("click", () => showNext(1));

loop.addEventListener("click", () => {
  timer = setInterval(() => {
    showNext(1);
  }, 1000);
});

pause.addEventListener("click", () => {
  clearInterval(timer);
});

function showNext(index) {
  slideIndex += index;
  showSlide(slideIndex);
  // console.log("slide Number", slideIndex);
}

function showSlide(nextSlideIndex) {
  const slidesArr = document.querySelectorAll(".slide");
  const slideDots = document.querySelectorAll(".slide__dot");

  if (nextSlideIndex > slidesArr.length - 1) {
    slideIndex = 0;
  }

  if (nextSlideIndex < 0) {
    slideIndex = 2;
  }

  for (let i = 0; i < slidesArr.length; i++) {
    slidesArr[i].style.display = "none";
  }

  for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].style.backgroundColor = "transparent";
  }

  slidesArr[slideIndex].style.display = "block";
  slideDots[slideIndex].style.backgroundColor = "white";
}
