const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOperButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");

menuOperButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menucloseButton.addEventListener("click", () => menuOperButton.click ());

// Close menu when the nav link is clicked
navlinks.forEach(link => {
    link.addEventListener("click", () => menuOperButton.click ());

});



// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spacebetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
    breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});