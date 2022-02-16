$(document).ready(function () {

    $("#MejoresA").click(function () {
        var posicion = $("#Mejores").offset();
        $('html, body').animate({ scrollTop: posicion.top }, 'slow');
    });

    $("#TopA").click(function () {
        var posicion = $("#Top").offset();
        $('html, body').animate({ scrollTop: posicion.top }, 'slow');
    });

    $("#5erroresA").click(function () {
        var posicion = $("#errores").offset();
        $('html, body').animate({ scrollTop: posicion.top }, 'slow');
    });

    $("#CalcularA").click(function () {
        var posicion = $("#calcular").offset();
        $('html, body').animate({ scrollTop: posicion.top }, 'slow');
    });

    $(".flecha").css("display", "none");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $(".flecha").fadeIn("slow");
        }
        else {
            $(".flecha").fadeOut("slow");
        }

    });
    $(".flecha").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');

    });
    var x = true;
    $('.hamburguer').on("click", function (e) {
        e.preventDefault();
        console.log("aaa");
        if (x) {
            $('.navegador2').stop().slideToggle('fast');
            x = false;
        } else {
            $('.navegador2').stop().slideToggle('fast', function () {
                $('.navegador2').css('display', '');
                x = true;
            })
        }
    });

});