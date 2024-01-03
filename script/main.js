$(function(){

    /* 메뉴 영역 */
    $(".main > li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })// .main > li hover

    /* 이미지 슬라이드 영역 */
    // $(".fade li").eq(0).show();
    // $(".fade li").eq(1).hide();
    // $(".fade li").eq(2).hide();

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();

    // $(".fade li:gt(0)").hide();

    $(".fade li").eq(0).siblings().hide();

    var n = 0;
    setInterval(function(){
        $(".fade li").eq(n).fadeOut();

        console.log("nn :", n);

        // if(n == 2){
        //     n=0;
        // }else{
        //     n++;
        // }// if

        n = (n+1) % 3;
        console.log("n :", n);
        $(".fade li").eq(n).fadeIn();
    }, 2500)// setInterval

    /* 탭메뉴 영역 */
    $(".title li").click(function(){
        $(".title li").removeClass("on");
        $(this).addClass("on");

        var j = $(this).index();
        console.log("j :", j);

        $(".cont_list ul").hide();
        $(".cont_list ul").eq(j).css({display: "flex"});
    })// title li click

    /* 팝업 영역 */
    $(".p_click").click(function(){
        $(".popup").show();
    })

    $(".close").click(function(){
        $(".popup").hide();
    })

})// jquery