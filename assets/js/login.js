$(function() {
    var timer = null;
    $.ajaxPrefilter(function(options) {
        options.url = 'http://www.liulongbin.top:3007' + options.url

    })

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
        $.post('/api/reguser', {
            username: $('.reg .name').val().trim(),
            password: $('.reg .password').val().trim()

        }, function(res) {
            timer = null;
            if (res.status != 0) {
                $('.tips').fadeTo(500, 0.7).html(res.message);
                timer = setTimeout(function() {
                    $('.tips').fadeOut(500);
                }, 500)
                return false;
            }
            $('.tips').fadeTo(500, 0.7).html(res.message);
            setTimeout(function() {
                $('.tips').fadeOut(500);
                $('.reg-tiao').click();
            }, 800)

        })

    })
    $('.login-dian form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: {
                username: $('.login-dian .name').val().trim(),
                password: $('.login-dian .password').val().trim()
            },
            success: function(res) {
                timer = null;
                if (res.status != 0) {
                    $('.tips').fadeTo(500, 0.7).html(res.message);
                    timer = setTimeout(function() {
                        $('.tips').fadeOut(500);
                    }, 500)
                    return false;
                }
                localStorage.setItem('token', res.token);
                location.href = './index.html';
            }



        })
    })




})