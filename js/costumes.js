    $("#btnGulung").on("mouseover",function(){
        $(this).removeClass("scroll-unhover");
        $(this).addClass("scroll-hover");
    });

    $("#btnGulung").on("mouseout",function(){
        $(this).addClass("scroll-unhover");
        $(this).removeClass("scroll-hover");
    });

    $("#btnGulung").on("click",function(){
        setTimeout(function(){
            $("html, body").animate({scrollTop: 0});
        },400);
        sessionStorage.setItem("skrol","0");
    });

    $(window).on("scroll",function(){
        var top = $(this).scrollTop();
        sessionStorage.setItem("skrol",top);

        if(top>=521.6){
            $("#btnGulung").show(500);
        }else{
            $("#btnGulung").hide(500);
        }
    });

    if(sessionStorage.getItem("skrol")!=null){
        var skrol = sessionStorage.getItem("skrol");

        setTimeout(function(){
            $("html, body").animate({scrollTop: skrol});
        },400);
    }

   