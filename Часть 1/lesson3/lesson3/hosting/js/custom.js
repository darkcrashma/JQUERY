
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


// Задание 2.3 Делаем табы с подчеркиванием на навигационном меню

$('.nav__item').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('nav__item--active')) {
        $('.nav__item').removeClass('nav__item--active');
    }
    $(this).addClass('nav__item--active');
});



//Задание 2.4 Делаем плавный фикс топ меню

var headerH = $("#js-header").height();
var navH = $('#js-nav-box').innerHeight();
$(document).on("scroll", function () {
    var docScroll = $(this).scrollTop();
    if (docScroll > headerH) {
        $("#js-nav-box").addClass('nav-fixed');
        $('#js-header').css("padding-top",navH)
    } else {
        $("#js-nav-box").removeClass('nav-fixed');
        $('#js-header').css("padding-top",0)
    }
});

//Задание 2.5 Делаем модальное окно

var showMod = $('#js-login-btn'),
    windowMod = $('.js-modal'),
    maskMod = $('#js-overlay-mod');

showMod.on('click', function (e) {
    e.preventDefault();
    windowMod.fadeIn();
    maskMod.fadeIn();
    $('body').addClass('open-mod');
});

$('#js-overlay-mod, .js-modal-close').on('click', function (e) {
    e.preventDefault();
    windowMod.fadeOut();
    maskMod.fadeOut();
    $('body').removeClass('open-mod');
});



//Задание 2.6 валидация url


$('.btn_search').on('click', function (e) {
    e.preventDefault();
    validate();
});

function validate() {
    var url = $('.search-input').val();
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(url)) {
        $('.search-form__decorate').addClass("search-form__decorate--active");
        $('.search-form__decorate').html("<img src='i/validate/true.jpg'><span class=\"search-form__close\"></span>");
        $('.search-form__close').on('click', function () {
            $('.search-form__decorate').removeClass("search-form__decorate--active");
        });
        return true;
    } else {
        $('.search-form__decorate').addClass("search-form__decorate--active");
        $('.search-form__decorate').html("<img src='i/validate/false.png'><span class=\"search-form__close\"></span>");
        $('.search-form__close').on('click', function () {
            $('.search-form__decorate').removeClass("search-form__decorate--active");
        });
        return false;
}}

//Задание 2.7 Изменить текст в заголовке сайта с помощью jQuery.
// $('title').text('ЗАГОЛОВОК ПОКРУЧЕ');


//Задание 2.8 Вывести в console.log все четные и нечетные элементы главного меню

// var menuElems = $('.nav a:even');
// menuElems.css('border', "3px dotted lightgreen");
// console.log(menuElems);
//
// var menuElems = $('.nav a:odd');
// menuElems.css('border', "3px dotted yellow");
// console.log(menuElems);



//Задание 2.9 Выбрать в футере один из списков. Вернуть все родительские и дочерние элементы
// var footerLists = $('.footer-nav')[0];
// console.log($(footerLists).find('*'));
// console.log($(footerLists).parents());
//
//
//
// //Задание 2.10 Средствами jquery вырезать блок с картой, перетащить перед блоком testimonials
// $( "#js-test" ).before($("#js-contacts"));
//
// //Задание 2.11 Удалить в футере блок с телефоном и копирайтом.
// $(".footer-phone-box").remove();
// $(".copyright").remove();



/*--------------------------------Задание 3------------------------------------------------*/
//Задание 3.1 Сделать аккордеоны в блоке FAQ
$('.js-faq-title').on('click',function (e) {
    e.preventDefault();
    var $this = $(this);
    if(!$this.hasClass('js-faq-title--active')) {
        $('.js-faq-title').removeClass('js-faq-title--active');
        $('.js-faq-content').slideUp();
    }
    $this.toggleClass('js-faq-title--active');
    $this.next().slideToggle();
});
//Задание 3.3 Подключить и настроить google-карту. Кастомизировать метку, настроить попап с подсказкой.