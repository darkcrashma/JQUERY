
/*---------------------------------------------------- Задание 1 -------------------------------------------------*/
/*--------------------------------Разные выборки ------------------------------------------------*/
// var allClasses= $('[class]');
// var allID = $('[id]');
// var allTags = $("*");
//
// console.log(allClasses);
// console.log(allID);
// console.log(allTags);


// var allNames= $('[name]');
// var allChecks = $(':checkbox');
// var allInputs = $(":input");
// var allBtn = $(":button");
// var allRadio = $(":radio");
//
// console.log(allNames);
// console.log(allChecks);
// console.log(allInputs);
// console.log(allBtn);
// console.log(allRadio);

// var allChecked= $(':checked');
// var allEnabled= $(':enabled');
// var allDisabled= $(':disabled');
//
// console.log(allChecked);
// console.log(allEnabled);
// console.log(allDisabled);


// var listChildren=$('.nav > a');
// console.log(listChildren);

// var multiAttr = $('[name="search_domain"],[class="pull-left search-input"]');
// console.log(multiAttr);

// var multiName = $('[name][class]');
// console.log(multiName);

/*---------------------------------------------------- Задание 1 -------------------------------------------------*/
/*--------------------------------Клики на кнопки и ссылки------------------------------------------------*/

// var allButtons = $('button');
// console.log(allButtons);
// var allLinks = $('a.btn');
// console.log(allLinks);
//
// allButtons.on('click', function (e) {
//     e.preventDefault();
//     alert ('ДРАТУТИ! Вы жмякнули батОн!:)');
// });
// allLinks.on('click', function (e) {
//     e.preventDefault();
//     alert ('ДРАТУТИ! Вы жмякнули линк!:)');
//     prompt ("Хотите задать какой-то вопрос?");
//     confirm ("Перехотите :(");
// });
/*--------------------------------Скролл нав меню по якорям------------------------------------------------*/
// $("#js-nav-domains").on('click', function(e) {
//     e.preventDefault();
//     var domainsOffset = $('#js-domain').offset().top;
//      $('html,body').animate({
//        scrollTop: domainsOffset
//     }, 500);
// });
//
// $("#js-nav-features").on('click', function(e) {
//     e.preventDefault();
//     var featuresOffset = $('#js-features').offset().top;
//     $('html,body').animate({
//         scrollTop: featuresOffset
//     }, 500);
// });
// $("#js-nav-test").on('click', function(e) {
//     e.preventDefault();
//     var testOffset = $('#js-test').offset().top;
//     $('html,body').animate({
//         scrollTop: testOffset
//     }, 500);
// });
// $("#js-nav-contacts").on('click', function(e) {
//     e.preventDefault();
//     var contactsOffset = $('#js-contacts').offset().top;
//     $('html,body').animate({
//         scrollTop: contactsOffset
//     }, 500);
// });

/*--------------------------------Скролл вверх------------------------------------------------*/

// $(document).scroll(function () {
//     var $scrollTop = $(document).scrollTop();
//     if($scrollTop > 845) {
//         $('.toTheTop').addClass('toTheTop--active');
//     } else {
//         $('.toTheTop').removeClass('toTheTop--active');
//     }
// });
//
// $(".toTheTop").on('click', function(e) {
//     e.preventDefault();
//     $('html,body').animate({
//         scrollTop: 0
//     }, 500);
// });

/*--------------------------------Задание 2------------------------------------------------*/
/*--------------------------------Фильтры------------------------------------------------*/
//
// var firstImg = $('img').first();
// console.log(firstImg[0]);
//
// var lastImg = $('img').last();
// console.log(lastImg[0]);
//
// var content = $('.container input');
// console.log(content);

// var inputMassive = $('input[type="text"]').closest($('.container'));
// console.log(inputMassive);
// $('.container').not(inputMassive);


// Делаем табы с подчеркиванием на навигационном меню

$('.nav__item').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('nav__item--active')) {
        $('.nav__item').removeClass('nav__item--active');
    }
    $(this).addClass('nav__item--active');
});



