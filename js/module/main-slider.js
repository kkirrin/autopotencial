export const initMainSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.main-item');
        console.log('Я тут')
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                // loop: true,
                autoplay: {
                    delay: 3000
                },
                direction: 'vertical',
                spaceBetween: 15,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 15
                    },
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 15
                    },
                    767: {
                      slidesPerView: 3,
                      spaceBetween: 15
                    }
                  }
            });
        }
    };

    itemSlider();
}