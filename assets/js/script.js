// SECTION WORKFLOW-03
let imgMockup = document.getElementById("img-mockup");
let btnStepOne = document.getElementById("step-one");
let btnStepTwo = document.getElementById("step-two");
let btnStepThree = document.getElementById("step-three");
let btnFlow = document.getElementsByClassName("btn-flow");

btnStepOne.addEventListener('click', changeMockupOne);
btnStepTwo.addEventListener('click', changeMockupTwo);
btnStepThree.addEventListener('click', changeMockupThree);

function changeMockupOne() {
    imgMockup.src = "images/mockups/mockup-login.svg";
}

function changeMockupTwo() {
    imgMockup.src = "images/mockups/mockup-home.svg";
}

function changeMockupThree() {
    imgMockup.src = "images/mockups/mockup-match.svg";
}

const slider = document.querySelector('.slider .list');
let isDown = false;
let startX;
let scrollLeft;
let autoScrollInterval;

// --- Drag manual ---
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

// --- Touch ---
let touchStartX = 0;
let touchScrollLeft = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - touchStartX) * 1.5;
  slider.scrollLeft = touchScrollLeft - walk;
});

// --- Auto Scroll Infinito Suave ---
slider.innerHTML += slider.innerHTML;
let scrollSpeed = 1;

function startAutoScroll() {
  stopAutoScroll();
  autoScrollInterval = setInterval(() => {
    slider.scrollLeft += scrollSpeed;
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();
