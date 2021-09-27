$(document).ready(function () {

    // add menu hamburger responsive
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // add modal with form login
    $('#login').click(function () {
        $('.login-form').addClass('popup');
    });

    // remover modal form login 
    $('.login-form form .fa-times').click(function () {
        $('.login-form').removeClass('popup');
    });

    // register scroll 
    $(window).on('load scroll', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

    });
});