$(window).resize(function(){
    // function
    menu_scroll();
    bewertungen_section_slider();
    service_slider();
    unser_team_slider();

});


$(document).ready(function(){
    //function
    menu_scroll();
    bewertungen_section_slider();
    service_slider();
    unser_team_slider();


    // WOW js
    new WOW().init();


    // toggle class
    $('.menu-toggle-btn').click(function(){
        $('.header-wrapper').toggleClass('mobileopen');
        $('html').toggleClass('cm-overflow');
    });
    $('.menu-close-btn').click(function(){
        $('.header-wrapper').removeClass('mobileopen');
        $('html').removeClass('cm-overflow');
    });

    $('.has-submenu a').click(function () {
        if ($(window).width() <= 991) {
            $('.has-submenu').toggleClass('show-active');
            $('.dropdown-submenu').slideToggle();
        }
    });

    // Accordion Js
    $('.ct_accordion_lable').click(function(){

        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
        /* $(this).parents('.hgf-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');*/

        $(this).siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
        /*  $(this).parents('.hgf-col').siblings().find('.ct_accordion_info').slideUp();*/

        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
    });

    // footer-fixed menu
    $(".footer-fixed-trigger").click(function(){
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });

    // Contact Side bar On Home page
    $('.contact--form-main').hover(
        function () {
            $(this).addClass('active');
            $('.contact--pallate').addClass('active');
        },
        function () {
            $(this).removeClass('active');
            $('.contact--pallate').removeClass('active');
        }
    );


    //more text js
    $('.moreless-button').click(function() {
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        $(this).parents('.owl-item').siblings().find('.moretext').slideUp('slow');
        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp('slow');

        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 470);


        if ($(this).find('span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');

        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });

    //table js
    $('.kurse_first_title_section ul li a').click(function(){
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');

        var kurese_first_title = $(this).attr('id');
        $('.' + kurese_first_title).addClass('active').siblings().removeClass('active');
    })

    $('.kures_day_table_details .table thead tr td a').click(function(){
        var day_data = $(this).attr('data-value');
        $('.' + day_data).addClass('active').siblings().removeClass('active');

        $('.mobile_day_list').find(day_data).addClass('active');
        var new_mobile_day = '.' + day_data;
        $(new_mobile_day).parents('li').siblings().find('a').removeClass('active');
    })

    $('.mobile_day_list li a').click(function(){
        var mobile_day_data = $(this).attr('data-value');

        $('.' + mobile_day_data).addClass('active').siblings().removeClass('active');

        $('.mobile_day_list').find(mobile_day_data).addClass('active');
        var new_mobile_day = '.' + mobile_day_data;
        $(new_mobile_day).parents('li').siblings().find('a').removeClass('active');
    })


    //Four Icon owl Slider
    $('.four-icon-owl').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots: false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:0,
            },
            575:{
                items:2,
                dots:true,
            },
            991:{
                items:3,
                margin:15,
            },
            1441:{
                items:4,
            }
        }
    });

    //Bewertungen Slider
    $('.bewertungen-owl').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots: false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:0,
            },
            992:{
                items:1,
                margin:0,
            }
        }
    });
    $('.kurse_innser_slider .owl-carousel').owlCarousel({
        loop:false,
        margin:90,
        dots:false,
        nav:true,
        stagePadding: 130,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                margin:40,
                stagePadding: 0,
                dots:true,
            },
            576:{
                items:2,
                margin:15,
                stagePadding: 0,
            },
            768:{
                items:2,
                margin:40,
                stagePadding: 0,
            },
            992:{
                items:2,
                margin:40,
            },
            1200:{
                items:2,
                margin:50,
            },
            1441:{
                items:2,
                margin:60,
            },
            1531:{
                items:2,
                margin:60,
            },
            1601:{
                items:2,
                margin:90,
            }
        }
    })

    $('.gellerie_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:28,
        dots:false,
        nav:true,
        stagePadding: 100,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
        "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
        "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
        "  </g>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                margin:15,
                stagePadding: 0,
                dots:true,
            },
            576:{
                items:3,
                margin:15,
                stagePadding: 0,
            },
            768:{
                items:3,
                margin:20,
                stagePadding: 60,
            },
            992:{
                items:3,
                margin:20,
                stagePadding: 70,
            },
            1200:{
                items:3,
                margin:25,
            },
            1441:{
                items:3
            }
        }
    });



});


//Msc_scroll class js
function menu_scroll() {
    var checkWidth = $(window).width();
    if (checkWidth >= 991) {
        $('.menu-over').removeClass('mCustomScrollbar');
        $('.dropdown-submenu ul').removeClass('mCustomScrollbar');


    } else {
        $('.menu-over').addClass('mCustomScrollbar');
        $('.dropdown-submenu ul').addClass('mCustomScrollbar');

    }
}

//news page slider funcrion
function bewertungen_section_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".news_mobile_slider");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoHeight:true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
            "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
            "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "  </g>\n" +
            "</svg>","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
            "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
            "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "  </g>\n" +
            "</svg>\n"],
            responsive:{
                0:{
                    items:1,
                    dots:false,
                },
                576:{
                    items:2,
                    dots:false,
                    margin:20,
                },
                768:{
                    items:2,
                    dots:false,
                    margin:30,
                },
            }
        });
    }
}

function service_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".service_blog_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoHeight:true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
            "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
            "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "  </g>\n" +
            "</svg>","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
            "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
            "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "  </g>\n" +
            "</svg>\n"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                },
                576:{
                    items:2,
                    dots:false,
                    margin:20,
                },
                768:{
                    items:2,
                    dots:false,
                    margin:30,
                },
            }
        });
    }
}

function unser_team_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".unser_team_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            autoHeight:true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
            "  <g id=\"Group_1051\" data-name=\"Group 1051\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
            "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.436,0,10.218,10.218,0,0\" transform=\"translate(0 24.076)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "    <line id=\"Line_6\" data-name=\"Line 6\" y1=\"34.294\" transform=\"translate(10.218)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "  </g>\n" +
            "</svg>","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"37.294\" height=\"24.678\" viewBox=\"0 0 37.294 24.678\">\n" +
            "  <g id=\"Group_1052\" data-name=\"Group 1052\" transform=\"translate(35.794 2.121) rotate(90)\">\n" +
            "    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M20.435,10.218,10.218,0,0,10.218\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "    <line id=\"Line_6\" data-name=\"Line 6\" y2=\"34.294\" transform=\"translate(10.218 0)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\"/>\n" +
            "  </g>\n" +
            "</svg>\n"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                },
                576:{
                    items:3,
                    dots:false,
                    margin:15,
                },
                768:{
                    items:4,
                    dots:false,
                    margin:30,
                },
            }
        });
    }
}










