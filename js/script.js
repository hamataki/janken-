$("#btn1").on('click',function(){
    //ランダムな数字を3つコンピュータにつくってもらって覚えてもらう
    const randomNum = Math.ceil(Math.random()*3);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

   //数字が何かによって、コンピュータのじゃんけんの手の結果を変える
   if (randomNum == 1 ){
    // $("#result-text").html("グー");
    $("#result-text").html("<img id='result-text' class='photo' src='https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s220/janken_gu.png'>")
    $("#win-lose").html("あいこ" + "<br>");
    $("#win-lose").append("もう一回");
   }else if (randomNum == 2 ){
    // $("#result-text").html("チョキ");
    $("#result-text").html("<img id='result-text' class='photo' src='https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s270/janken_choki.png'>");
    $("#win-lose").html("勝ち");
    $('#particles-js').css('display', 'block').css('opacity', 1);

   }else{
    // $("#result-text").html("パー");
    $("#result-text").html("<img id='result-text' class='photo' src='https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s290/janken_pa.png'>");
    $("#win-lose").html("負け");
   }
});

$("#btn2").on('click',function(){
    //ランダムな数字を3つコンピュータにつくってもらって覚えてもらう
    const randomNum = Math.ceil(Math.random()*3);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

   //数字が何かによって、コンピュータのじゃんけんの手の結果を変える
   if (randomNum == 1 ){
    $("#result-text").html("<img id='result-text' class='photo' src='https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s220/janken_gu.png'>")
    $("#win-lose").html("負け");
   }else if (randomNum == 2 ){
    $("#result-text").html("<img id='result-text' class='photo' src='https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s270/janken_choki.png'>");
    $("#win-lose").html("あいこ" + "<br>");
    $("#win-lose").append("もう一回");
   }else{
    $("#result-text").html("<img id='result-text' class='photo' src='https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s290/janken_pa.png'>");
    $("#win-lose").html("勝ち");
    $('#particles-js').css('display', 'block').css('opacity', 1);

   }
});

$("#btn3").on('click',function(){
    //ランダムな数字を3つコンピュータにつくってもらって覚えてもらう
    const randomNum = Math.ceil(Math.random()*3);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

   //数字が何かによって、コンピュータのじゃんけんの手の結果を変える
   if (randomNum == 1 ){
    // $("#result-text").html("グー");
    $("#result-text").html("<img id='result-text' class='photo' src='https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s220/janken_gu.png'>")
    $("#win-lose").html("勝ち");
    $('#particles-js').css('display', 'block').css('opacity', 1);

   }else if (randomNum == 2 ){
    // $("#result-text").html("チョキ");
    $("#result-text").html("<img id='result-text' class='photo' src='https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s270/janken_choki.png'>");
    $("#win-lose").html("負け");
   }else{
    // $("#result-text").html("パー");
    $("#result-text").html("<img id='result-text' class='photo' src='https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s290/janken_pa.png'>");
    $("#win-lose").html("あいこ" + "<br>");
    $("#win-lose").append("もう一回");
   }
});
