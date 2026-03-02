document.addEventListener("DOMContentLoaded", function () {
  // Most Viewed Articles Swiper (Bài viết xem nhiều nhất)
  // Matches 4 items per row on desktop as requested (restoring original layout size)
  var mostViewedSwiper = new Swiper(".most-viewed-swiper", {
    slidesPerView: 1.2, // Mobile partial view
    spaceBetween: 16,
    navigation: {
      nextEl: ".section-most-viewed .swiper-button-next",
      prevEl: ".section-most-viewed .swiper-button-prev",
    },
    pagination: {
      el: ".section-most-viewed .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });

  // New Products Swiper (Sản phẩm mới)
  // Matches 5 items per row on desktop (standard product grid)
  var newProductsSwiper = new Swiper(".new-products-swiper", {
    slidesPerView: 1.5, // Mobile partial view
    spaceBetween: 16,
    navigation: {
      nextEl: ".section-new-products .swiper-button-next",
      prevEl: ".section-new-products .swiper-button-prev",
    },
    pagination: {
      el: ".section-new-products .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // Fix sticky header on page load if already scrolled
  const header = document.getElementById('header-nav');
  const overlay = document.getElementById('overlay');
  
  if (header && overlay) {
      if (window.scrollY > 50) {
          header.classList.add('fixed');
          overlay.classList.add('t-68');
      }
      
      // Ensure header updates on scroll (duplicate of general.js but safer if general.js fails or loads late)
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              header.classList.add('fixed');
              overlay.classList.add('t-68');
          } else {
              header.classList.remove('fixed');
              overlay.classList.remove('t-68');
          }
      });
  }
});
