$(function() {

    // Fixed header

    var header = $('#header'),
        headH = $('#head').innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= headH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Menu animation

    $('#nav_burger').on('click', function(event) {
        event.preventDefault();
    
        $(this).toggleClass('active');
        $('#navigation').toggleClass('active');
    });

    // Accordion animation

    $('.menu_btn').on('click', function(event) {
        event.preventDefault();
        $('.menu').toggleClass('menu_active');
    });

    $('.menu_btn2').on('click', function(event) {
        event.preventDefault();
        $('.menu2').toggleClass('menu2_active');
    });

    $('.menu_btn3').on('click', function(event) {
        event.preventDefault();
        $('.menu3').toggleClass('menu3_active');
    });

    // Scroll

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $('#navigation a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset}, 500);
    });

    // Collapse

    $('[data-collapse]').on('click', function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('collapse');

        //$(blockId).slideToggle();
        $this.toggleClass('active');

    });
});