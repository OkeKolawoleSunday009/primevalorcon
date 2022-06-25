
        // var i = 0;
        // var images = [];
        // var slideTime =  5000; // 3 seconds

        // images[0] = 'img/banner1.jpg';
        // images[1] = 'img/banner2.jpg';
        // images[2] = 'img/team-4.jpg';

         // $(".hero-header").css(
        //     {background:'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'} 
        //     );
        // $(".hero-header").css();
        // $(".hero-header").css("background-image", 
        //
       
        $(".hero-header").css({background:'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)'});
        // function changePicture() {

        //     $(".hero-header").css({
        //          background:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
              
        //             });
            
                    // , url(" + images[i] + ")
                // $().css({background : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"})
           
                // document.body.style.backgroundImage = images[i];
            // if (i < images.length - 1) {
            //     i++;
            // } else {
            //     i = 0;
            // }
    
            // setTimeout("changePicture()", slideTime);
        // }
    
        // window.onload = changePicture;
    
            //  for read more       
            var defaultHeight = 400; // height when "closed"
              var text = $(".text");
              var textHeight = text[0].scrollHeight; // the real height of the element
              var button = $(".button");
              
              text.css({"max-height": defaultHeight, "overflow": "hidden"});
              
              button.on("click", function(){
                var newHeight = 0;
                if (text.hasClass("active")) {
                  newHeight = defaultHeight;
                  text.removeClass("active");
                  $(".button").text("Read more!");
                } else {
                  newHeight = textHeight;
                  $(".button").text("Read less!");
                  text.addClass("active");
                }
                text.animate({
                  "max-height": newHeight
                }, 500);
              });

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

