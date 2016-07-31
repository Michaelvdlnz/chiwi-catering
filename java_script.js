/*global $, jQuery, alert*/
/*jslint browser: true*/
$(window).load(function () {
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
    $('#overlay').fadeOut("slow");
});
var main = function ($) {
    "use strict";

/* Logo and Nav-Bar for each pages */
    document.getElementById("LogoChiwi").innerHTML =
        "<img src='Images/logo_signature01.png' alt='logo chiwi catering'>" +
        "<div class='OrderNowButton'><a id='idOrderNowButton' href='contact.html'>ORDER NOW</a></div>";
    
    document.getElementById("nav01").innerHTML =
        "<ul id='menu'>" +
            "<li><a href='index.html'><i class='fa fa-home fa-4x'><br><img id='navButtonHome' src='Images/home_button.png' alt='home'></i></a></li>" +
            "<li><a href='menu.html'><i class='fa fa-cutlery fa-4x'><br><img id='navButtonMenu' src='Images/menu_button_white.png' alt='menu'></i></a></li>" +
            "<li><a href='event.html'><i class='fa fa-calendar fa-4x'><br><img id='navButtonEvent' src='Images/event_button_white.png' alt='event'></i></a></li>" +
            "<li><a href='gallery.html'><i class='fa fa-film fa-4x'><br><img id='navButtonGallery' src='Images/gallery_button_white.png' alt='event'></i></a></li>" +
            "<li><a href='blog.html'><i class='fa fa-rss fa-4x'><br><img id='navButtonAbout' src='Images/blog_button_white.png' alt='blog'></i></a></li>" +
            "<li><a href='contact.html'><i class='fa fa-envelope-o fa-4x'><br><img id='navButtonContact' src='Images/contact_button_white.png' alt='contact' ></i></a></li>" +
        "</ul>";
    document.getElementById("slider-container").innerHTML =
        "<img src='Images/background%20_image_paella648px_height.jpg' alt='paella' id='BackImageId'>";
    document.getElementById("footer01").innerHTML =
        "<a href='https://www.facebook.com/The-Chiwi-Catering-Company-1495231674112384/'><img src='Images/facebook-flat-vector-logo-400x400.png' style='width:50px;height:50px'></a>" +
        "<a href='https://www.instagram.com/chiwicatering/'><img src='Images/Instagram2.png' style='width:50px;height:50px' ></a>" +
        "<a href=''><img src='Images/GooglePlus-Logo-02.png' style='width:50px;height:50px'></a><br>" +
        "<p> &copy 2016 - <?php echo date('Y ');?></p><p> ChiwiCatering. All right reserved. </p>" +
        "<!-- START CERTIFIED DOMAIN CODE -->" +
        "<img id='seal_3_certificate_image' alt='site seal' style='cursor: pointer;' src='//www.crazydomains.co.nz/certification/seal/3/76214b6e945f4e638fea5a3a19b8a4331461118315/' onclick='var seal_div = document.getElementById('seal_3_certificate'), seal_iframe = document.getElementById('seal_3_certificate_iframe'); if (seal_div.style.display == 'none') { seal_div.style.display = ''; if (seal_iframe.src == '') seal_iframe.src = '//www.crazydomains.co.nz/certification/certificate/?token=76214b6e945f4e638fea5a3a19b8a4331461118315'; } else seal_div.style.display = 'none';'><div style='display:none; z-index: 999; position: fixed; top: 50%; left: 50%; margin-left: -303px; margin-top: -313px;' id='seal_3_certificate'><iframe style='height:626px; width:607px; 690px; border: none; background: white; box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); border-radius: 6px;' scrolling='no' id='seal_3_certificate_iframe'></iframe></div><script type='text/javascript'>(function(){function a(e){e=e||window.event;var b,c,d=(e.srcElement)?e.srcElement:e.target;for(;d;d=d.parentNode){if(d.id&&(c=d.id.match(/^seal_(1|2|3)_certificate(|_image)$/))){c=c[1];break}}for(b=1;b<=3;b++){d=document.getElementById('seal_'+b+'_certificate');if(d&&(b!=c)){d.style.display='none'}}}if(document.addEventListener){document.addEventListener('click',a)}else{if(document.attachEvent){document.attachEvent('onclick',a)}}})(); </script>" +
        "<!-- FINISH CERTIFIED DOMAIN CODE -->";

/*nav image on hover change to an other image font black*/
    $('#navButtonHome').hover(function () {
        $(this).attr('src', 'Images/home_button_black.png');
    }, function () {
        $(this).attr('src', 'Images/home_button.png');
    });
    $('#navButtonAbout').hover(function () {
        $(this).attr('src', 'Images/blog_button_black.png');
    }, function () {
        $(this).attr('src', 'Images/blog_button_white.png');
    });
    $('#navButtonMenu').hover(function () {
        $(this).attr('src', 'Images/menu_button_black.png');
    }, function () {
        $(this).attr('src', 'Images/menu_button_white.png');
    });
    $('#navButtonEvent').hover(function () {
        $(this).attr('src', 'Images/event_button_black.png');
    }, function () {
        $(this).attr('src', 'Images/event_button_white.png');
    });
    $('#navButtonGallery').hover(function () {
        $(this).attr('src', 'Images/gallery_button_black.png');
    }, function () {
        $(this).attr('src', 'Images/gallery_button_white.png');
    });
    $('#navButtonContact').hover(function () {
        $(this).attr('src', 'Images/contact_button_black.png');
    }, function () {
        $(this).attr('src', 'Images/contact_button_white.png');
    });
/*this function is to tell the use on witch one page you are on.*/
    $(function () {
        var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
        $('nav ul li a ').each(function () {
            if ($(this).attr('href') === pathname) {
                $(this).addClass('active');
            }
        });
    });
/* Function to shrinkMenu the logo when scroll down */
/* When scroll down to 200px chiwiLogo swipe to left and button order now swipe to right*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('#headerId1').addClass('MoveToLeft shrinkMenu');
            $('#nav01').addClass('moveToTheBar');
            $('.OrderNowButton').addClass('ButtonMoveToLeft');
        } else {
            $('#headerId1').removeClass('MoveToLeft shrinkMenu');
            $('#nav01').removeClass('moveToTheBar');
            $('.OrderNowButton').removeClass('ButtonMoveToLeft');
        }
    });
/*hide the button home from gallery */
    $('#g-site-menu').hide();
/* important ,this is to load the page from about and gallery onto like a iframe but better*/
    $("#areaGallery").load("/gallery/catering-food/");
    $("#areaAbout").load("/category/blog/");
/* Date picker for form contact page*/
    $(function () {
        $("#datepicker").datepicker();
    });
    if ($(window).width() < 747) {
        $("#nav01").removeAttr("id");
        $("nav").attr("id","nav02");
        
    } else {
        
    }
};
(function ($) {
    'use strict';
    $(document).ready(main);
}(jQuery));