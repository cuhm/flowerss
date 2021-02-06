$(document).ready(function (){
const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //настройки адаптивной версии
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, //то по 2 картинки 
     // spaceBetween: 20 //расстояние м\у ними
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    
    992: {
      slidesPerView: 6,
    }
  }
});

const reviewsSlider = new Swiper('.rewiews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});