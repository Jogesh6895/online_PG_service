/*
created on: 12th March, 2023
author: Jogesh Ghadai (jogesh.6895@gmail.com)
*/


var ini_flag = 0;
$('.toggle').click(function () {
    "use strict";
    $('nav ul').slideToggle();
    if (ini_flag === 0) {
        ini_flag = 1;
        $('header').css("height", "390px");
    }
    else {
        ini_flag = 0;
        $('header').css("height", "62px");
    }
});

$(window).resize(function () {
    "use strict";
    if ($(window).width() > 780) {
        $('nav ul').removeAttr('style');
        $('header').css("height", "62px");
        ini_flag = 0;
    }
});
