$(function () {
    // Page Background
    if(Cookies && Cookies.get("PageBg")){
        $("body").removeClass("bg-rainbowblue bg-deepspace bg-purpink bg-default bg-sunset bg-lunada bg-gray-wood bg-brown-wood bg-maple-wood bg-teal-texture bg-black-texture bg-blue-texture");
        $("body").addClass(Cookies.get("PageBg"))
        bgClass = Cookies.get("PageBg")
        $(".bgtheme-list li").removeClass("active");
        $(".bgtheme-list li a[class="+bgClass+"]").closest("li").addClass("active")
        $("select[name='pageBg']").val(bgClass).find("option[value=" + bgClass +"]").attr('selected', true);
    }

    $("select[name='pageBg']").on('change', function () {
        bgClass = $(this).val();
        // alert(val)
        $("body").removeClass("bg-rainbowblue bg-deepspace bg-purpink bg-default bg-sunset bg-lunada bg-gray-wood bg-brown-wood bg-maple-wood bg-teal-texture bg-black-texture bg-blue-texture");
        $("body").addClass(bgClass)
        $(".bgtheme-list li").removeClass("active");
        Cookies.set('PageBg', bgClass);
    });

    $(".bgtheme-list li").click(function (e) { 
        e.preventDefault();
        // alert()
        $(".bgtheme-list li").removeClass("active");
        $(this).addClass("active");
        bgClass = $(this).children("a").attr("data-theme");
        // alert(back)
        $("body").removeClass("bg-rainbowblue bg-deepspace bg-purpink bg-default bg-sunset bg-lunada bg-gray-wood bg-brown-wood bg-maple-wood bg-teal-texture bg-black-texture bg-blue-texture");
        $("body").addClass(bgClass)
        Cookies.set('PageBg', bgClass);
    });

    // Reading Mode
    src = $(".qimgs").attr("src");
    // alert(src)
    if(Cookies && Cookies.get("readingMode")){
        src = src.replace(/black/g, "white")
        $(".qimgs").attr("src", "" + src);
        $('#readingMode').bootstrapToggle('off')
    }
    $("#readingMode").change(function (e) {
        e.preventDefault();
        if (src.includes("black")) {
            src = src.replace(/black/g, "white")
            $(".qimgs").attr("src", "" + src);
            Cookies.set("readingMode","white")
        } else {
            src = src.replace(/white/g, "black")
            $(".qimgs").attr("src", "" + src);
            Cookies.remove("readingMode")
        }
    });
});