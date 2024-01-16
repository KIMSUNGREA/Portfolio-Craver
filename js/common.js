$(document).ready(function(){

    $(".menu_btn").click(function(){
        $(this).addClass("fade");
        $(".menu_close_btn").addClass("bl");
        $(".m_menu").addClass("move")
    })

    $(".menu_close_btn").click(function(){
        $(this).removeClass("bl");
        $(".menu_btn").removeClass("fade");
        $(".m_menu").removeClass("move")
    })

    $(".m_menulist > li > a").click(function(){
        $(".m_menulist ul").slideUp();
        $(this).next().stop().slideToggle();
    })

    $(".m_menulist > li > a").click(function(){
        $(".m_menulist > li > a").removeClass("click_ac");
        $(this).addClass("click_ac");
    })

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if (st > 800) {
            $(".text1, .text2, .text3").addClass("trg");
        } else {
            $(".text1, .text2, .text3").removeClass("trg");
        }
    })

    $(window).scroll(function(){
        var cont3 = $(this).scrollTop();
        if (cont3 > 1206) {
            $(".layer_dimm").addClass("fadein");
        } else {
            $(".layer_dimm").removeClass("fadein");
        }
    })

    // $(window).scroll(function(){
    //     var cont4 = $(this).scrollTop();
    //     if (cont4 > 4600) {
    //         $(".logo a img").attr("src", "../images/hd_logo_b.svg");
    //         $(".menu_btn img").attr("src", "../images/icon_ham_btn_b.svg");
    //         $(".inner_wrap .menu a").addClass("bk")
    //         $(".language button").addClass("bk")
    //         $(".t_btn button").addClass("bk")

    //     } else {
    //         $(".logo a img").attr("src", "../images/hd_logo.svg");
    //         $(".menu_btn img").attr("src", "../images/icon_ham_btn.svg");
    //         $(".inner_wrap .menu a").removeClass("bk")
    //         $(".language button").removeClass("bk")
    //         $(".t_btn button").removeClass("bk")
    //     }
    // })

    $(window).scroll(function(){
        var backch = $(this).scrollTop();
        if (backch > 4200) {
            $(".cont3").addClass("bkch");
            $(".cont4 .layer_dimm").addClass("fadeout");
        } else {
            $(".cont3").removeClass("bkch");
            $(".cont4 .layer_dimm").removeClass("fadeout");
        }
    })

    $(".t_btn").click(function(){
        $("html").animate({"scrollTop":0},500);
    })


    // =============== sub_page1 ===================
    $(window).scroll(function(){
        var hda = $(this).scrollTop();
        if (hda > 160) {
            $(".none").addClass("up");
        } else {
            $(".none").removeClass("up");
        }
    })

    $(window).scroll(function(){
        var hda = $(this).scrollTop();
        if (hda > 300) {
            $(".header").addClass("blin");
        } else {
            $(".header").removeClass("blin");
        }
    })
    
    $(window).scroll(function(){
        var bkch = $(this).scrollTop();
        if (bkch > 930) {
            $(".bs").addClass("bkch");
            $(".bs").addClass("op");
        } else {
            $(".bs").removeClass("bkch");
            $(".bs").removeClass("op");
        }
    })

    $(window).scroll(function(){
        var sub4 = $(this).scrollTop();
        if (sub4 > 3200) {
            $(".tit p").addClass("chw");
            $(".sub_cont4_bg .layer_dimm").addClass("fadeout");
        } else {
            $(".tit p").removeClass("chw");
            $(".sub_cont4_bg .layer_dimm").removeClass("fadeout");
        }
    })
    
    $(window).scroll(function() {
        const windowScrollTop = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const procent = Math.floor(windowScrollTop / height * 100);
        const isBeyondThreshold = procent > 82;
    
        $(".logo a img").attr("src", isBeyondThreshold ? "../images/hd_logo_b.svg" : "../images/hd_logo.svg");
        $(".menu_btn img").attr("src", isBeyondThreshold ? "../images/icon_ham_btn_b.svg" : "../images/icon_ham_btn.svg");
    
        const toggleElements = [".inner_wrap .menu a", ".language button", ".t_btn button"];
        toggleElements.forEach(selector => {
            $(selector).toggleClass("bk", isBeyondThreshold);
        });
    });




































})