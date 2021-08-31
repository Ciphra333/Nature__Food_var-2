$(document).ready(function(){
$('.slider').slick();
});

  $('.slider').slick({
    infinite: true,
    speed:300,
    // опред. скорость пролистывания
    slidesToShow: 5,
    // кол-во слайдов для показа
    slidesToScroll: 1,
    // кол-во слайдов за раз перелистывается
    responsive: [
      {
        breakpoint: 1025,
        // сообщает, при какой ширине экрана нужно вкл. настройки
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });