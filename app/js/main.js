$(function () {
    //Активация галерей
    $(".project-gallery__more-text-btn").click(function () {
        $(".project-gallery__elem.active").removeClass("active")
        $(this).parent().parent().addClass("active");
    });

    $(".project-gallery__close").click(function () {
        $(this).parent().parent().removeClass("active");
    });

    $(".team-gallery__elem").click(function () {
        $(".team-gallery__elem.active").removeClass("active")
        $(this).addClass("active");
    });

    $(".project-gallery__close").click(function () {
        $(this).parent().parent().removeClass("active");
    });

    //управление слайдером с цитатами и авторами
    $("#author-slider,#quote-slider").carousel({
        interval: false
    });
    $("#quote-author-prev").click(function () {
        $("#author-slider,#quote-slider").carousel("prev")
    });
    $("#quote-author-next").click(function () {
        $("#author-slider,#quote-slider").carousel("next")
    });

    //Анимация скрола через якоря
    $(".nav-item a").click(function () {
        $("html, body").clearQueue();
        let scrollId = $(this).attr("href");
        scrollPoint = $(scrollId).offset().top;
        $("html, body").animate({ "scrollTop": scrollPoint-$(".navbar").height() }, 1000);
    });

});