$('.header__basket-icon').on('click', function(){
    $('.header__account .header__dropdown').removeClass('header__dropdown--active')
    $('.header__basket .header__dropdown').toggleClass('header__dropdown--active')
})
$('.header__account-icon').on('click', function(){
    $('.header__account .header__dropdown').toggleClass('header__dropdown--active')
    $('.header__basket .header__dropdown').removeClass('header__dropdown--active')
})
$(document).on('click', function (e) {
   
    console.log($(e.target).closest('.header__basket, .header__account'))
    if(!$(e.target).closest('.header__basket, .header__account').length){
        $('.header__dropdown').removeClass('header__dropdown--active')
    }
});

//js - slider

var slideIndex = 1;
var items;
var time;
slideshow(slideIndex);
function slideshow(n) {
    console.log('slideIndex => ' + slideIndex);
    console.log('n => ' + n);
    var slides = document.getElementsByClassName('slideshow__slide')
    // var slides = $('.slideshow__slide');
    // console.log(slides);
    // $(slides).css('display', 'none');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    console.log('slideIndex => ' + slideIndex);
    for (i = 0; i < slides.length; i++) {
        // console.log(i); // 0 1 2 3
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    progress(slideIndex - 1);
}
function move(a) {
    clearInterval(time);
    items[slideIndex - 1].style.width = 0;
    //slidexIndex --> 1 | 2 | 3 | 4
    //Next ---> 1
    //slideIndex = 5 + 1 = 5
    //-----------prev--------
    //slideIndex ---> 4 | 3 | 2 | 1
    //prev ---> -1
    // slideIndex =1 + -1 --> (+-)= - ---> 1 - 1 = 0
    slideIndex = slideIndex + a; // slideIndex 1 -->prev -1  1 + -1= 1-1=0
    slideshow(slideIndex);
}
function progress(slideId) {
    items = document.getElementsByClassName('slideshow__item--inner');
    var width = 0;
    time = setInterval(timer, 10);

    // 10 * 100 = 1000;
    function timer() {
        if (width >= 100) {
            clearInterval(time);
            items[slideId].style.width = 0;
            slideIndex++;
            slideshow(slideIndex);
        } else {
            width++;
            items[slideId].style.width = width + "%";
        }
    }
}

$(document).ready(function () {
    $('.slider').each(function () {
        var swiper= $(this).find('.swiper-container')
        var slide__content= $(this).find('.slider__content')
        var swiper_button_next = slide__content.next();
        var swiper_button_prev = swiper_button_next.next();
        
        new Swiper(swiper,{
            loop:false,
            nextButton:swiper_button_next,
            prevButton:swiper_button_prev,
            slidesPerView:4,
            pageinationClickable:true,
            spaceBetween:20,
            breakpoints:{
                1920:{slidesPerView:4,spaceBetween:20},
                1028:{slidesPerView:3,spaceBetween:20},
                768:{slidesPerView:2,spaceBetween:10},
                480:{slidesPerView:1,spaceBetween:0},
    
            }
        })

    })

})

$(window).scroll(function() {
    if($(this).scrollTop() >= 200){
        $('.scroll__top').fadeIn()
    }else{
        $('.scroll__top').fadeOut()
    }
})
$('.scroll__top').on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },800)

})
