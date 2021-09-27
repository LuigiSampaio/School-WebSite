$(document).ready(function () {

    // adicionando menu hamburger no navbar-menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // adicionando modal da pagina de login
    $('#login').click(function () {
        $('.login-form').addClass('popup');
    });

    // removendo modal da pagina de login
    $('.login-form form .fa-times').click(function () {
        $('.login-form').removeClass('popup');
    });

    // scroll da pagina 
    $(window).on('load scroll', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        // calculando scroll para ativar classe active no navbar-menu 
        $('section').each(function () {
            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            // paginacao conforme navbar-menu
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});