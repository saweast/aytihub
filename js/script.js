function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);


/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')

/* Subscribe Form
========================================================*/
;(function ($) {
    var o = $('#subscribe-form');
    if (o.length > 0) {
        include('js/sForm.js');
    }
})(jQuery);

/* Booking Form
 ========================================================*/
//;
//(function ($) {
//    var o = $('#bookingForm');
//    if (o.length > 0) {
//        include('js/booking/booking.js');
//        include('js/booking/jquery-ui-1.10.3.custom.min.js');
//        include('js/booking/jquery.fancyform.js');
//        include('js/booking/jquery.placeholder.js');
//        include('js/booking/regula.js');
//        $(document).ready(function () {
//            o.bookingForm({
//                ownerEmail: '#'
//            });
//        });
//    }
//})(jQuery);




$(document).ready(function(){
    var SmoothScroll = (function() {
        'use strict';

        var $root = $('html, body');

        /**
         * Smooth scroll to element
         * @param  {jQuery DOM element} $target
         * @param  {Number}             xOffset (optional)
         */
        function smoothScroll($target, xOffset) {
            var offset = xOffset || 0;
            $root.animate({
                scrollTop: $target.offset().top - offset - 200
            }, 1500);
        }
        // Add scroll to links
        $('a#wantLearn').click(function(e) {
            e.preventDefault();
            smoothScroll($($.attr(this, 'href')));
            $('input#name').focus();
            $('input#name').closest('form').addClass('blue');
        });
        // Public API
        return {
            to: smoothScroll
        };
    })();

function markAs(elem, color, delay) {
    elem.removeClass('yellow');
    elem.addClass(color);
    setTimeout(function(){
        elem.find('input').val('');
        elem.removeClass(color);
    }, delay);
};
    var bF = $('#bookingForm');
    bF.submit(function(event){
        event.preventDefault();
        var form_data = $(this).serialize();
        bF.removeClass('blue');
        bF.addClass('yellow');
        $.ajax({
            type: 'POST',
            url: './back-side/mail/Mail.class.php',
            data: form_data,
            success: function(){markAs(bF, 'green', 4000)},
            error: function(){markAs(bF, 'red', 4000);},
        });
    });

    var sF = $('#subscribe-form');
    sF.submit(function(event){
        event.preventDefault();
        var form_data = $(this).serialize();
        sF.removeClass('blue');
        sF.addClass('yellow');
        $.ajax({
            type: 'POST',
            url: './back-side/mail/Mail.class.php',
            data: form_data,
            success: function(){markAs(sF, 'green', 4000)},
            error: function(){markAs(sF, 'red', 4000);},
        });
    });
});

$(document).ready(function(){
    $(document).on('click', function(ev) {
        var target = ev.target;
        if (target.tagName == 'INPUT' || target.tagName == 'BUTTON') {
                //ev.preventDefault();
                $(target).closest('form').addClass('blue');
        }else if (target.id != 'wantLearn') {
            $('form').removeClass('blue');
        }
    });


});









/* Parallax
 ========================================================*/
;
(function ($) {
    var o = $('.parallax');
    if (o.length > 0 && $('html').hasClass('desktop')) {
        include('js/jquery.rd-parallax.js');
    }
})(jQuery);


/* Countdown
 ========================================================*/
;(function($) {
    $.fn.countdown = function(options, callback) {
        //custom 'this' selector
        thisEl = $(this);
        // array of custom settings
        var settings = {
            'date': null,
            'format': null
        };
        // append the settings array to options
        if(options) {
            $.extend(settings, options);
        }
        //create the countdown processing function
        function countdown_proc() {
            var eventDate = Date.parse(settings.date) / 1000;
            var currentDate = Math.floor($.now() / 1000);

            if(eventDate <= currentDate) {
                callback.call(this);
                clearInterval(interval);
            }
            var seconds = eventDate - currentDate;
            var days = Math.floor(seconds / (60 * 60 * 24));
            //calculate the number of days
            seconds -= days * 60 * 60 * 24;
            //update the seconds variable with number of days removed
            var hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60;
            //update the seconds variable with number of hours removed
            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;
            //update the seconds variable with number of minutes removed
            //conditional statements
            if (days == 1) { thisEl.find(".timeRefDays").text("День"); } else { thisEl.find(".timeRefDays").text("Дней"); }
            if (hours == 1) { thisEl.find(".timeRefHours").text("Час"); } else { thisEl.find(".timeRefHours").text("Часов"); }
            if (minutes == 1) { thisEl.find(".timeRefMinutes").text("Минута"); } else { thisEl.find(".timeRefMinutes").text("Минут"); }
            if (seconds == 1) { thisEl.find(".timeRefSeconds").text("Секунда"); } else { thisEl.find(".timeRefSeconds").text("Секунд"); }
            //logic for the two_digits ON setting
            if(settings.format == "on") {
                days = (String(days).length >= 2) ? days : "0" + days;
                hours = (String(hours).length >= 2) ? hours : "0" + hours;
                minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
                seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
            }
            //update the countdown's html values.
            thisEl.find(".days").text(days);
            thisEl.find(".hours").text(hours);
            thisEl.find(".minutes").text(minutes);
            thisEl.find(".seconds").text(seconds);
        }
        //run the function
        countdown_proc();
        //loop the function
        interval = setInterval(countdown_proc, 1000);
    };
}) (jQuery);
//Provide the plugin settings

$(".countdown").countdown({
        //The countdown end date
        date: "10 august 2015 13:00:00",
        // on (03:07:52) | off (3:7:52) - two_digits set to ON maintains layout consistency
        format: "on"
    },
    function() {
        // This will run when the countdown ends
        alert("Набор группы!");
    });



