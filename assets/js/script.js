// SECTION WORKFLOW-03
let imgMockup = document.getElementById("img-mockup");
let btnStepOne = document.getElementById("step-one");
let btnStepTwo = document.getElementById("step-two");
let btnStepThree = document.getElementById("step-three");

btnStepOne.addEventListener('click', changeMockupOne);
btnStepTwo.addEventListener('click', changeMockupTwo);
btnStepThree.addEventListener('click', changeMockupThree);

function changeMockupOne() {
    imgMockup.src = "assets/images/mockups/mockup-login.svg";
}

function changeMockupTwo() {
    imgMockup.src = "assets/images/mockups/mockup-home.svg";
}

function changeMockupThree() {
    imgMockup.src = "assets/images/mockups/mockup-match.svg";
}

// SECTION TEAM-06 - Carrossel de Cards
const slider = document.querySelector('.slider .list');

if (slider) {
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
}

// SECTION FEATURES-04 - Swiper com Paginação
document.addEventListener('DOMContentLoaded', () => {
  const swiperElement = document.querySelector('#features-04-items');
  
  if (swiperElement && typeof Swiper !== 'undefined') {
    const swiper = new Swiper('#features-04-items', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      spaceBetween: 90,
      loopAdditionalSlides: 2,
      watchSlidesProgress: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 800,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 90
        }
      }
    });
  }
});