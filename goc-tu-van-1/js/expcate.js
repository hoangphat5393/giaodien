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
 document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.detail_title');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');

  // ✅ DEBUG check to confirm buttons exist
  if (!nextBtn || !backBtn) {
    alert('❌ Buttons not found. Check your HTML IDs.');
    return;
  }

  const viewSize = 8;
  let startIndex = 0;

  function updateView() {
    cards.forEach(card => card.style.display = 'none');

    for (let i = startIndex; i < startIndex + viewSize && i < cards.length; i++) {
      cards[i].style.display = 'flex';
    }

    backBtn.style.display = startIndex > 0 ? 'inline-block' : 'none';
    nextBtn.style.display = startIndex + viewSize < cards.length ? 'inline-block' : 'none';
  }

  nextBtn.addEventListener('click', () => {
    if (startIndex + viewSize < cards.length) {
      startIndex += 1;
      updateView();
    }
  });

  backBtn.addEventListener('click', () => {
    if (startIndex > 0) {
      startIndex -= 1;
      updateView();
    }
  });

  updateView();
});