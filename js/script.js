(function ($) {

    'use strict';


    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(50).fadeOut(50);
        }
    }


    //Update Header Style + Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            if (windowpos >= 50) {
                $('.main-header').addClass('fixed-header');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.main-header').removeClass('fixed-header');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }

    headerStyle();


    //Add Onepage Nav
    if ($('.one-page-nav').length) {
        $('.one-page-nav').onePageNav();
    }


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown > ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    }


    //Main Slider
    if ($('.main-slider .tp-banner').length) {

        jQuery('.main-slider .tp-banner').show().revolution({
            dottedOverlay: 'yes',
            delay: 10000,
            startwidth: 1200,
            startheight: 590,
            hideThumbs: 200,

            thumbWidth: 80,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: 'none',
            navigationArrows: '0',
            navigationStyle: 'preview4',

            touchenabled: 'on',
            onHoverStop: 'off',

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: 'mouse',
            parallaxBgFreeze: 'on',
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: 'off',

            navigationHAlign: 'center',
            navigationVAlign: 'bottom',
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: 'left',
            soloArrowLeftValign: 'bottom',
            soloArrowLeftHOffset: 0,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: 'right',
            soloArrowRightValign: 'bottom',
            soloArrowRightHOffset: 0,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: 'off',
            fullScreen: 'off',

            spinner: 'spinner4',

            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: 'off',

            autoHeight: 'off',
            forceFullWidth: 'on',

            hideThumbsOnMobile: 'on',
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: 'on',
            hideArrowsOnMobile: 'on',
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: '',
            fullScreenOffsetContainer: '',
        });


    }


    if ($('.team-slider').length) {
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplayHoverPause: false,
            autoplay: 4500,
            smartSpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1140: {
                    items: 4
                }
            }
        });
    }


    //Sponsors Slider
    if ($('.sponsors-slider').length) {
        $('.sponsors-slider').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            smartSpeed: 0,
            autoplay: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 5
                },
                1100: {
                    items: 6
                }
            }
        });
    }


    //Three Column Slider
    if ($('.column-carousel.three-column').length) {
        $('.column-carousel.three-column').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 3
                }
            }

        });
    }


    //News Slider
    if ($('.news-slider').length) {
        $('.news-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplay: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }


    //Accordions
    if ($('.accordion-box').length) {
        $('.accordion-box .acc-btn').on('click', function () {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }


    // Fact Counter
    function factCounter() {
        if ($('.fact-counter').length) {
            $('.fact-counter .column.animated').each(function () {

                var $t = $(this),
                    n = $t.find('.count-text').attr('data-stop'),
                    r = parseInt($t.find('.count-text').attr('data-speed'), 10);

                if (!$t.hasClass('counted')) {
                    $t.addClass('counted');
                    $({
                        countNum: $t.find('.count-text').text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: 'linear',
                        step: function () {
                            $t.find('.count-text').text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find('.count-text').text(this.countNum);
                        }
                    });
                }

            });
        }
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox();
    }


    //Gallery Filters
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Google Map Settings
    // if ($('#map-location').length) {
    //     var map;
    //     map = new GMaps({
    //         el: '#map-location',
    //         zoom: 14,
    //         scrollwheel: false,
    //         //Set Latitude and Longitude Here
    //         lat: -12.2508717,
    //         lng: -76.927321
    //     });
    //
    //     //Add map Marker
    //     map.addMarker({
    //         lat: -12.2508717,
    //         lng: -76.927321,
    //         infoWindow: {
    //             content: '<p style="text-align:center;"><strong>DETEC - PERU</strong><br>Kilometro 25.5 Panamericana Sur</p>'
    //         }
    //
    //     });
    // }


    // Scroll to top
    if ($('.scroll-to-top').length) {
        $('.scroll-to-top').on('click', function () {
            // animate
            $('html, body').animate({
                scrollTop: $('html, body').offset().top
            }, 1000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
        factCounter();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();
    });


})(window.jQuery);