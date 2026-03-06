var bannerTopSwiper = new Swiper('.bannerTopSwiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 16,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.banner-top-button-next',
        prevEl: '.banner-top-button-prev',
    },
});
   
document.addEventListener("DOMContentLoaded", function () {
  var viewMoreBtn = document.getElementById("viewMoreBtn");
  viewMoreBtn.addEventListener("click", function () {
    var items = document.querySelectorAll(".exp_item:not(.flexd)");
    for (var i = 0; i < 2 && i < items.length; i++) {
      items[i].classList.add("flexd");
    }
    if (document.querySelectorAll(".exp_item:not(.flexd)").length === 0) {
      viewMoreBtn.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var viewMoreBtn = document.getElementById("viewMoretop");
  viewMoreBtn.addEventListener("click", function () {
    var items = document.querySelectorAll(".item:not(.show)");
    for (var i = 0; i < 2 && i < items.length; i++) {
      items[i].classList.add("show");
    }
    if (document.querySelectorAll(".item:not(.show)").length === 0) {
      viewMoreBtn.style.display = "none";
    }
  });
});