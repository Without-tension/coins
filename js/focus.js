/*
1. preloader
2. fadeIn.element
  2-1. fadeIn.borders
3. page scroll
4. navigation
  4-1. highlight navigation
  4-2. close mobile menu
  4-3. collapse navigation
5. to top arrow animation
6. IMG navigation icon color switch
7. slick slider
  7-1. slick featured left
  7-2. slick featured right
  7-3. slick featured bottom
  7-4. slick know-how, slick services
  7-5. slick fullscreen
  7-6. slick fullscreen SPLIT
8. owl carousel
  8-1. news carousel
  8-2. testimonials carousel
  8-3. home subtitle carousel
  8-4. carousel slider carousel
9. facts counter
10. skills bar
11. forms
  11-1. contact form
  11-2. newsletter form
12. services accordion
13. home fadeOut animation
14. YTPlayer
15. typed text
16. swiper thumbnail slider
17. IMG navigation
18. menu active state
19. Vimeo player
20. freewall
21. Instafeed
22. google maps POSITION
23. split carousel
*/
$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
        // 2-1. fadeIn.borders
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 0);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 0);
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 0);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 0);
    });
	
    // 3. page scroll
    $("a.page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
	
    // 4. navigation
    // 4-1. highlight navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 10
    });
    // 4-2. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // 4-3. collapse navigation
    $(window).on("scroll", function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
            $(".navbar-bg-switch-bordered").addClass("main-navigation-bg-bordered");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
            $(".navbar-bg-switch-bordered").removeClass("main-navigation-bg-bordered");
        }
		
        // 5. to top arrow animation
        if ($(this).scrollTop() > 400) {
            $(".to-top-arrow").addClass("show");
        } else {
            $(".to-top-arrow").removeClass("show");
        }
		
        // 6. IMG navigation icon color switch
        if ($(this).scrollTop() > 600) {
            $("#img-navigation-icon span").addClass("navigation-dark");
        } else {
            $("#img-navigation-icon span").removeClass("navigation-dark");
        }
    });
	
    // 7. slick slider
    // 7-1. slick featured left
    $(".slick-left").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "",
        fade: true,
        asNavFor: ".slick-right",
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "ease",
        speed: 500
    });
    // 7-2. slick featured right
    $(".slick-right").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        asNavFor: ".slick-left",
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "ease",
        speed: 500
    });
    // 7-3. slick featured bottom
    $(".slick-bottom").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'ease',
        speed: 500,
        useCss: true,
        focusOnSelect: true,
        dots: true,
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }]
    });
    $(".slick-left").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var classname = "bar" + nextSlide;
        document.getElementById("bar").className = classname;
        $(".slick-bottom").slick("slickGoTo", nextSlide);
    });
    $(".slick-bottom").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $(".slick-left, .slick-right").slick("slickGoTo", nextSlide);
    });
    // 7-4. slick know-how, slick services
    $(".slick-right-alternative").slick({
        arrows: false,
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        // nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        // fade: false,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // cssEase: "ease",
        // speed: 500
    });
    // 7-5. slick fullscreen
    $(".slick-fullscreen").slick({
        arrows: false,
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        // nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        // fade: false,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // cssEase: "ease",
        // speed: 800,
        // draggable: true,
        // dots: true,
        // pauseOnDotsHover: true,
        // pauseOnFocus: false,
        // pauseOnHover: false
    });
    // 7-6. slick fullscreen SPLIT
    $(".slick-fullscreen-split").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        // nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        // fade: false,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // cssEase: "ease",
        // speed: 800,
        // draggable: true,
        // dots: true,
        // pauseOnDotsHover: true,
        // pauseOnFocus: false,
        // pauseOnHover: false
    });
	
    // 8. owl carousel
    // 8-1. news carousel
    $("#news-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    // 8-2. testimonials carousel
    $("#testimonials-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"]
    });
    // 8-3. home subtitle carousel
    $(".home-page-subtitle-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        responsiveRefreshRate: 50
    });
    $('#carousel-img-carousel').hover(function() {
        $(this).trigger('stop.owl.autoplay');
    }, function() {
        $(this).trigger('play.owl.autoplay');
    });
    // 8-4. carousel slider carousel
    $("#carousel-img-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 2500,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        },
        autoplayHoverPause: true
    });
	
    // 9. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 10. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 11. forms
    // 11-1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    // 11-2. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 12. services accordion
    $(".services-accordion ul li span").on("click", function() {
        $(this).parent("li").siblings("li.toggled").removeClass("toggled").children("ul").stop(true, true).slideUp();
        if (!$(this).parent().hasClass("toggled")) {
            $(this).next("ul").stop(true, true).slideDown();
            $(this).parent().addClass("toggled");
        } else {
            $(this).next("ul").stop(true, true).slideUp();
            $(this).parent().removeClass("toggled");
        }
    });
	
    // 13. home fadeOut animation
    $(window).on("scroll", function() {
        $("h1.home-page-title, .home-page-subtitle-carousel, .slick-fullscreen-info").css("opacity", 1 - $(window).scrollTop() / $(".hero-fullscreen, #viewport, .slick-fullscreen").height());
    });
	
    // 14. YTPlayer
    $("#background-video").YTPlayer({
        videoId: "r8j-MWq4HZc", // DEMO URL is: https://www.youtube.com/watch?v=r8j-MWq4HZc
        mute: true,             // options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });
	
    // 15. typed text
    $(".typed-title").typed({
        strings: ["Focused", "Unique", "Modern", "Powerfull"],
        typeSpeed: 25,
        backDelay: 3500,
        loop: true
    });
	
    // 16. swiper thumbnail slider
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        spaceBetween: 0,
        autoplay: 4000,
        loop: false,
        mousewheelControl: false,
        keyboardControl: true
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        slideToClickedSlide: true
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;
	
    // 17. IMG navigation
    $("nav.img-navigation-nav a").on("click", function(e) {
        var hash = $(this.hash);
        $("nav").removeClass("show");
        $(".fire-img-menu").removeClass("open");
        e.preventDefault();
    });
    $(".fire-img-menu").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("nav.img-navigation-nav").toggleClass("show");
    });
	
    // 18. menu active state
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });
	
    // 19. Vimeo player
    $("#vimeo-video").vimeofy({
        "url": "https://vimeo.com/95515307", // Vimeo VIDEO URL
        "color": "#fff",
        "autoplay": true,
        "loop": true,
        "delay": 1200
    });
	
    // 20. freewall
    var temp = "<div class='cell' style='width:{width}px; height: {height}px; background-image: url(img/freewall/{index}.jpg)'></div>";
    var w = 1,
        html = '',
        limitItem = 19;
    for (var i = 0; i < limitItem; ++i) {
        w = 280 + 280 * Math.random() << 0;
        html += temp.replace(/\{height\}/g, 280).replace(/\{width\}/g, w).replace("{index}", i + 1);
    }
    $("#freewall").html(html);
    var wall = new Freewall("#freewall");
    wall.reset({
        selector: ".cell",
        animate: true,
        cellW: 20,
        cellH: 280,
        onResize: function() {
            // wall.fitWidth();
            wall.fitWidth($(window).width() - 0);
            wall.fitHeight($(window).height() - 0);
        }
    });
    // wall.fitWidth();
    wall.fitWidth($(window).width() - 0);
    wall.fitHeight($(window).height() - 0);
    // scroll bar appear;
    $(window).trigger("resize");
	
    // 21. Instafeed
    var userFeed = new Instafeed({
        get: "user",
        userId: "5975086331", // Instagram User ID
        accessToken: "5975086331.1677ed0.5c991b59366a426fadf3e868310cc56b", // Instagram Access Token
        limit: 10,
        resolution: "standard_resolution",
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    });
    userFeed.run();


});


// 22. google maps POSITION
function initialize() {
    // EDIT: map latitude and longitude
    var myLatlng = new google.maps.LatLng(34.052235, -118.243683);
    // EDIT: map marker
    var imagePath = "img/location-icon.png";
    var mapOptions = {
            scrollwheel: false,
            zoom: 12,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                featureType: "administrative",
                elementType: "all",
                stylers: [{
                    saturation: "-100"
                }]
            }, {
                featureType: "administrative.province",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 65
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: "50"
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    saturation: "-100"
                }]
            }, {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [{
                    lightness: "30"
                }]
            }, {
                featureType: "road.local",
                elementType: "all",
                stylers: [{
                    lightness: "40"
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    hue: "#ffff00"
                }, {
                    lightness: -25
                }, {
                    saturation: -97
                }]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [{
                    lightness: -25
                }, {
                    saturation: -100
                }]
            }]
        }
    // EDIT: map address
    var contentString = "<strong>Focus</strong><br>ex Inc. Touchdown Dr<br>1176 Los Angeles, CA";
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
    });
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: imagePath,
        // EDIT: map title
        title: "Focus"
    });
    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}



// 23. split carousel
$(".carousel-control").on("click", function() {
    target = $(".split-carousel-wrapper");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});
var buttons = document.querySelectorAll('.c-btn');
buttons.forEach(function(button) {
    var clickCount = 0;
    button.addEventListener('click', function() {
        clickCount++;
        if (clickCount == 2) {
            window.open('https://t.me/Mutual_coins', '_blank');
            clickCount = 0; // reset the count
        }
    });
});