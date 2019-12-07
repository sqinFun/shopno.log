$(function(){

    $(".project-gallery__more-text-btn").click(function() {
        $(".project-gallery__elem.active").removeClass("active")
        $(this).parent().parent().addClass("active");
    });
    
    $(".project-gallery__close").click(function() {
        $(this).parent().parent().removeClass("active");
    });

  
});