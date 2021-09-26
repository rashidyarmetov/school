$(function() {
    // гамбургер меню
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let list = $('.top ul');
    let ourMagazine = $('.form_text');
    let searchForm = $('.search_wrapper form');
    let icon = $('.social_icon');

    if ($(window).width() < 1165) {
        mobile = true;
        $('header .menu').append(list);
        $('.top .container').append(ourMagazine);
        $('.header_bottom').append(searchForm);

        $('.parameters>ul>li .drop').addClass('mob');
        $('.parameters>ul>li').on('click', function(e) {

            e.preventDefault();

            if ($(this).hasClass('_switch')) {
                $(this).find('.drop.mob').slideUp();
                $(this).removeClass('_switch');
            } else {
                $(this).addClass('_switch');
                $(this).find('.drop.mob').slideDown();
            }

        });
    }

    if ($(window).width() < 560) {
        mobile = true;
        $('.footer_inner').append(icon);
    }

    $(window).on('resize', function() {
        if ($(window).width() < 1165 && !mobile) {
            mobile = true;
            $('header .menu').append(list);
            $('.top .container').append(ourMagazine);
            $('.header_bottom').append(searchForm);
        }

        if ($(window).width() >= 1150 && mobile) {
            mobile = false;
            $(this, 'header .menu').removeClass('active');
            $('.top .container').append(list);
            $('.search_wrapper').append(ourMagazine);
            $('.search_wrapper').prepend(searchForm);
        }

        if ($(window).width() < 560) {
            // mobile = true;
            $('.footer_inner').append(icon);

        }

        if ($(window).width() >= 560) {
            // mobile = false;
            $('.section_bottom .container').append(icon);
        }
    });


    // SLIDER_TOP SECTION 

    $('.slider_top_wrapper').slick({
        fade: true
    });



    // + -, Выбор количества товара
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.qarantee_slider').slick({
        // fade: true
    });






    $('.goods_inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews_wrapper').slick({

        infinite: true,
        responsive: [{
            breakpoint: 950,
            settings: {
                arrows: false
            }
        }]
    });

    $('.fas.fa-search-plus.fake').on('click', function() {
        $('.header_bottom form input').toggleClass('open');
        $('.header_bottom form button').toggleClass('buttonSearch')
        this.style.display = 'none';
    });


    // akkardion

    // $('.accordion_item .accordion_content').slideUp();
    // $('.accordion_item ._currentAccordion_item .accordion_content').slideDown();

    $('.cashier i').on('click', function() {

        let orderContent = $(this).closest('.job_info').find('.vacancy_info');

        orderContent.slideToggle();

    });

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {

        item.addEventListener('click', function() {

            document.body.style.overflow = "hidden";

            let dataValue = this.getAttribute("data-btn");

            let modal = document.querySelector('.' + dataValue)

            modal.style.display = 'flex';

        });

    });

    document.querySelectorAll('.modal').forEach(function(item) {

        item.addEventListener('click', function(e) {

            if (e.target === this || e.target.classList.contains('close')) {

                document.body.style.overflow = "visible";
                this.style.display = "none";

            }

        });

    });


    // Фильтры в каталоге(catalog.html)

    $('.filter h3.title').on('click', function() {

        $(this).toggleClass('open')
        $(this).siblings('.inner').slideToggle();

    });

    $('.filters .close').on('click', function() {
        $('.catalog_page .filters').toggleClass('open');
    });

    $('.filters_btn button').on('click', function() {
        $('.catalog_page .filters').toggleClass('open');
    });

});