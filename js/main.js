const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    breakpoints: {
        // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40
            }
    }
  });