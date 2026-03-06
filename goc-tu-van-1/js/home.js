

    document.querySelectorAll('.product-recent').forEach((wrapper) => {
        const tabs = wrapper.querySelectorAll('.tab-list .tab-btn');
        const contents = wrapper.querySelectorAll('.tab-content');

        if (!tabs.length || !contents.length) return;

        tabs[0].classList.add('active');
        contents[0].classList.add('active');

        tabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                tabs.forEach((t) => t.classList.remove('active'));
                contents.forEach((c) => c.classList.remove('active'));

                this.classList.add('active');

                const targetId = this.getAttribute('data-tab');
                const targetContent = wrapper.querySelector(`#${targetId}`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });

    function updateLastVisibleSlide(swiper) {
        const slides = swiper.slides;
        slides.forEach((slide) => {
            slide.classList.remove('last-visible', 'first-visible');
        });

        const firstIndex = swiper.activeIndex;
        const lastIndex = swiper.activeIndex + swiper.params.slidesPerView - 1;

        const firstVisible = slides[firstIndex];
        const lastVisible = slides[lastIndex];

        if (firstVisible) {
            firstVisible.classList.add('first-visible');
        }
        if (lastVisible) {
            lastVisible.classList.add('last-visible');
        }
    }

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

    var swiper = new Swiper('.mySwiper', {
        cssMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        mousewheel: true,
        keyboard: true,
    });

    var categoriesSwiper = new Swiper('.categoriesSwiper', {
        slidesPerView: 8,
        navigation: {
            nextEl: '.menu-cate-button-next',
            prevEl: '.menu-cate-button-prev',
        },
        on: {
            init(swiperInstance) {
                updateLastVisibleSlide(swiperInstance);
            },
            slideChange(swiperInstance) {
                updateLastVisibleSlide(swiperInstance);
            },
            resize(swiperInstance) {
                updateLastVisibleSlide(swiperInstance);
            },
        },
    });

    var promotionSwiperBanner = new Swiper('.promotionSwiperBanner', {
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
            nextEl: '.promotion-button-next',
            prevEl: '.promotion-button-prev',
        },
    });

    var paymentIncentivesSwiper = new Swiper('.paymentIncentivesSwiper', {
        slidesPerView: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: '.payment-button-next',
            prevEl: '.payment-button-prev',
        },
    });

    var bannerSwiper = new Swiper('.bannerSwiper', {
        slidesPerView: 2,
        cssMode: true,
        navigation: {
            nextEl: '.banner-button-next',
            prevEl: '.banner-button-prev',
        },
        mousewheel: true,
        keyboard: true,
        spaceBetween: 16,
    });

    var hotPromotionSwiper = new Swiper('.hotPromotionSwiper', {
        slidesPerView: 7,
    });

    var newsSwiperBanner = new Swiper('.newsSwiperBanner', {
        slidesPerView: 4,
        spaceBetween: 32,
    });

    document.querySelectorAll('.productSwiper').forEach(function (swiperEl, index) {
        const swiperWrapper = swiperEl.closest('.product-swiper-wrapper');
        const nextBtn = swiperWrapper?.querySelector('.product-button-next');
        const prevBtn = swiperWrapper?.querySelector('.product-button-prev');

        // if (index == 0) {
        //     swiperWrapper.classList.add('active');
        // }


        new Swiper(swiperEl, {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
        });

        const variants = swiperEl.querySelectorAll('.product-variant .variant-list button');

        if (variants.length > 0) {
            variants[0].classList.add('active');
        }

        variants.forEach(function (variant) {
            variant.addEventListener('click', function (e) {
                e.preventDefault();
                const productCard = this.closest('.product-card');

                productCard.querySelectorAll('.product-variant .variant-list button')
                    .forEach(v => v.classList.remove('active'));

                this.classList.add('active');
            });
        });
    });

    function startCountdown() {
        const countdownWrapper = document.querySelector('.countdown-box'); 
        const countdownEl = document.getElementById('countdown-time');
        //const eventTimeEl = document.getElementById('event-time');
    
        //if (!countdownWrapper || !countdownEl || !eventTimeEl) return;
        if (!countdownWrapper || !countdownEl) return;
    
        const targetTime = countdownWrapper.getAttribute('data-countdown');
        const target = new Date(targetTime);
    
        if (isNaN(target.getTime())) {
            countdownEl.innerHTML = `<b>0</b><span>:</span><b>00</b><span>:</span><b>00</b>`;
            eventTimeEl.textContent = '--:--';
            return;
        }
    
        /*eventTimeEl.textContent = target.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
        });*/
    
        let timer;
        function updateCountdown() {
            const now = new Date();
            const diff = target - now;
    
            if (diff <= 0) {
                countdownEl.innerHTML = `<b>00</b><span>:</span><b>00</b><span>:</span><b>00</b>`;
                eventTimeEl.textContent = '--:--';
                if (timer) clearInterval(timer);
                return;
            }
    
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
            countdownEl.innerHTML = `
                <b>${hours}</b><span>:</span>
                <b>${String(minutes).padStart(2, '0')}</b><span>:</span>
                <b>${String(seconds).padStart(2, '0')}</b>
            `;
        }
    
        updateCountdown();
        timer = setInterval(updateCountdown, 1000);
    }

    startCountdown();

    document.querySelectorAll('.tab-wrapper').forEach((wrapper) => {
        const tabList = wrapper.querySelector('.tab-list');
        const contents = wrapper.querySelectorAll('.product-swiper-wrapper');

        if (!tabList) return;

        tabList.addEventListener('click', function (e) {
            e.preventDefault();
            const clickedTab = e.target.closest('.tab-item');
            if (!clickedTab) return;

            const tabValue = clickedTab.getAttribute('data-tab-product');
            const allTabs = tabList.querySelectorAll('.tab-item');

            allTabs.forEach((tab) => tab.classList.remove('active'));
            clickedTab.classList.add('active');

            contents.forEach((content) => {
                content.classList.toggle('active', content.getAttribute('data-content') === tabValue);
            });
        });
    });

    document.querySelectorAll('.hot-promotion').forEach((wrapper) => {
        const tabList = wrapper.querySelector('.categories ul');
        const tabItems = tabList?.querySelectorAll('li');
        const contents = wrapper.querySelectorAll('.product-swiper-wrapper');
    
        if (!tabList || !tabItems.length) return;
    
        // ✅ Mặc định active li đầu tiên
        const firstTab = tabItems[0];
        firstTab.classList.add('active');
    
        const firstTabValue = firstTab.getAttribute('data-tab');
    
        // Hiển thị content đầu tiên tương ứng
        contents.forEach((content) => {
            content.classList.toggle('active', content.getAttribute('data-content') === firstTabValue);
        });
    
        // Nếu tab đầu tiên là flash-sale thì hiện countdown
        const countdownBox = wrapper.querySelector('.countdown-box');
        if (firstTabValue === 'flash-sale-gia-soc') {
            countdownBox.classList.remove('hidden');
        } else {
            countdownBox.classList.add('hidden');
        }
    
        tabList.addEventListener('click', function (e) {
            e.preventDefault();
            const clickedTab = e.target.closest('li');
            if (!clickedTab) return;
    
            const tabValue = clickedTab.getAttribute('data-tab');
    
            if (tabValue === 'flash-sale-gia-soc') {
                countdownBox.classList.remove('hidden');
            } else {
                countdownBox.classList.add('hidden');
            }
    
            tabItems.forEach((tab) => tab.classList.remove('active'));
            clickedTab.classList.add('active');
    
            contents.forEach((content) => {
                content.classList.toggle('active', content.getAttribute('data-content') === tabValue);
            });
        });
    });

    const tabLinks = document.querySelectorAll('.news .tab-list a');
    const contentBlocks = document.querySelectorAll('.news .new-list');

    tabLinks.forEach((tab) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            const selectedTab = this.getAttribute('data-tab');

            tabLinks.forEach((t) => t.classList.remove('active'));
            this.classList.add('active');

            contentBlocks.forEach((content) => {
                const match = content.getAttribute('data-content') === selectedTab;
                content.style.display = match ? 'block' : 'none';
            });
        });
    });

    contentBlocks.forEach((content) => {
        const isActive = content.getAttribute('data-content') === document.querySelector('.news .tab-list a.active')?.getAttribute('data-tab');
        content.style.display = isActive ? 'block' : 'none';
    });
