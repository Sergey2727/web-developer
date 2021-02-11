$(document).ready(function(){
  $(".owl-carousel.owl-carousel-one").owlCarousel(
    {
      items: 1,
      loop: true,
      nav: true,
      navText: ['<img src="../img/carousel/nav-left.svg">','<img src="../img/carousel/nav-right.svg">'],
      dots: true,
    }
  );

  $(".owl-carousel.owl-carousel-two").owlCarousel(
    {
      items: 4,
      loop: true,
      margin: 30,
      nav: true,
      navText: ['<img src="../img/carousel/nav-left.svg">','<img src="../img/carousel/nav-right.svg">'],
      dots: true,
      autoplay:true, //Автозапуск слайдера
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:2000 //Время смены слайда
    }
  );

  $(".owl-carousel.owl-carousel-three").owlCarousel(
    {
      items: 1,
      loop: true,
      margin: 30,
      nav: true,
      navText: ['<img src="../img/carousel/nav-left.svg">','<img src="../img/carousel/nav-right.svg">'],
      dots: true,
    }
  );
});

