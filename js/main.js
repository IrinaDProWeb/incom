$(function(){

    $('.tabs__block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='../images/prev-arrow.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../images/next-arrow.svg' class='next' alt='2'>",

        responsive: [
            {
              breakpoint: 700,
              settings: {
                arrows: false,
              }
            },
        ]
              });

});