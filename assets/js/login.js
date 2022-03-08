$(function() {
    $('.login-dian a').on('click', function() {
        $('.login-dian').hide();
        $('.reg').show();
    })
    $('.reg a').on('click', function() {
        $('.reg').hide();
        $('.login-dian').show();
    })
    $('.reg form').on('submit', function(e) {
        e.preventDefault();
        var zhanghao = $('.reg .name').val().trim();
        var mima = $('.reg .password').val().trim();

        if (/^[0-9a-zA-Z_]{6,12}$/.test(zhanghao)) {

        }

    })

})