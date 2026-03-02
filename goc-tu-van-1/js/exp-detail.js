
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

  document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');

  if (!nextBtn || !backBtn) {
    alert('❌ Buttons not found. Check your HTML IDs.');
    return;
  }

  const viewSize = 4;
  let startIndex = 0;

  function updateView() {
    cards.forEach(card => card.style.display = 'none');

    for (let i = startIndex; i < startIndex + viewSize && i < cards.length; i++) {
      cards[i].style.display = 'block';
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
  document.querySelectorAll('.ctindxknh .ttl').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const sections = document.querySelectorAll('.titletab');
const menuLinks = document.querySelectorAll('.ctindxknh .ttl');

window.addEventListener('scroll', () => {
  let currentId = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 80 && rect.bottom > 80) {
      currentId = section.id;
    }
  });

  menuLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href').substring(1) === currentId
    );
  });
});
function toggleClass(childId) {
      const element = document.getElementById(childId);
      element.classList.toggle('active');
    }

   const items = document.querySelectorAll('.ttl');

    items.forEach(item => {
      item.addEventListener('click', () => {
        
        items.forEach(i => i.classList.remove('active'));
        
        
        item.classList.add('active');
      });
    });