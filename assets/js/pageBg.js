$(function () {
    $(".bgtheme-list li").click(function (e) { 
        e.preventDefault();
        // alert()
        $(".bgtheme-list li").removeClass("active");
        $(this).addClass("active");
        back = $(this).children("a").attr("data-theme");
        // alert(back)
        $("body").removeClass("bg-rainbowblue bg-deepspace bg-purpink bg-default bg-sunset");
        $("body").addClass(back)
    });
});