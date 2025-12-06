const swiper = new Swiper('.swiper', {
  // Параметри
  effect: 'fade', //інші ефекти: "slide", "fade", "cube", "coverflow", "flip", "cards"
  loop: true,
  //   Кількість слайдів на екрані
  slidesPerView: 1,
  //   Активний слайд в центрі
  centeredSlides: true,

  // Якщо потрібна пагінація
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets', // default, інші варіанти: "fraction", "progressbar", "custom"
    clickable: true, // щоб можна було клікати по крапках пагінації
  },
});
