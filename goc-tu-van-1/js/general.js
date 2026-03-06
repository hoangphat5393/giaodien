var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
});

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header-nav');
        const overlay = document.getElementById('overlay');
        if (window.scrollY > 50) {
            header.classList.add('fixed');
            overlay.classList.add('t-68');
        } else {
            header.classList.remove('fixed');
            overlay.classList.remove('t-68');
        }
    });

    const categoryItems = document.querySelectorAll('.category-item');
    const subcategoryItems = document.querySelectorAll('.subcategory-item');

    categoryItems[0]?.classList.add('active');
    const firstTargetId = categoryItems[0]?.dataset.sub;
    const firstTargetSubItem = document.querySelector(`.subcategory-item ul#${firstTargetId}`)?.closest('.subcategory-item');
    firstTargetSubItem?.classList.add('active');

    categoryItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            // Remove active ở tất cả
            categoryItems.forEach(i => i.classList.remove('active'));
            subcategoryItems.forEach(s => s.classList.remove('active'));

            // Active item được hover
            item.classList.add('active');

            // Hiển thị đúng sub
            const targetId = item.dataset.sub;
            const targetSubItem = document.querySelector(`.subcategory-item ul#${targetId}`)?.closest('.subcategory-item');
            if (targetSubItem) {
                targetSubItem.classList.add('active');
            }
        });
    });

    document.querySelector('.view-more').addEventListener('click', function (e) {
        e.preventDefault();
        const moreLinks = document.querySelector('.extra-links');
        moreLinks.classList.toggle('hidden');

        const isHidden = moreLinks.classList.contains('hidden');

        this.innerHTML = isHidden
            ? `Xem thêm <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.8916 6.6665L8.55827 9.33317L11.2249 6.6665" stroke="#025CA6" stroke-width="1.5" stroke-linecap="square" /></svg>`
            : `<span class="collapse">Thu gọn</span> <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.8916 9.3335L8.55827 6.66683L11.2249 9.3335" stroke="#025CA6" stroke-width="1.5" stroke-linecap="square"/>
                </svg>
`;
        this.classList.toggle('collapse', !isHidden);
    });
});
