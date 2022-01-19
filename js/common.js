window.onload = function(){
    $(".main4-btn button").eq(0).addClass('active');
} 





$(".main6 li").click(function(){  
    // $(".main6 li div")
    // $(this).siblings().find('p').slideUp();
    $(this).find('p').slideToggle()
});


$(".main4-btn button").click(function(){
    $(".main4-btn button").removeClass('active');
    $(this).addClass('active');
    
    $(".main4-book div").removeClass('active');
    $(".main4-book div").eq($(this).index()).addClass('active');
});


$(window).scroll(function(){
    if($(this).scrollTop()>600){
    $(".head").addClass('active');
    $('.head a').addClass('active');
    }else{
        $(".head ").removeClass('active');
        $(".head a").removeClass('active');
    
    }
    
});