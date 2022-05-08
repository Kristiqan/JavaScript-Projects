function swim(fishid){
    var topFishPos = Math.random()*($( document ).height()-50);
    var leftFishPos = Math.random()*($( document ).width()-50);
    var timeToMove = 1000 + Math.random()*1000;
    move(fishid, topFishPos, leftFishPos, timeToMove);
}
function move(fishid, topFishPos, leftFishPos, timeToMove){
    $("#"+fishid).css({"transform":"rotateY(0deg)"});
    var newTopPos = topFishPos + "px";
    var newLeftPos = leftFishPos + "px";
    if( parseInt($("#"+fishid).css("left"))<leftFishPos){
        $("#"+fishid).css({"transform":"rotateY(180deg)"});
    }
    $("#"+fishid).animate({"left": newLeftPos, "top": newTopPos}, timeToMove, function(){swim(fishid);});
    
}

$(document).ready(function(){
    var fish = [];
    fish[0]="0.png";
    fish[1]="1.png";
    fish[2]="2.png";
    fish[3]="3.png";
   

    window.onresize = swim;

    for(i=0; i<6;i++){
        var x = Math.floor( Math.random() * 4 );
        $("ul").append("<li id='fish"+i+"'><img src='"+fish[x]+"'></li");
        swim("fish"+i);
    }

    $("#aquarium").click(function(ev){

        $("li").each(function(){
            $(this).stop();
            setTimeout(move($(this).attr("id"),ev.pageY,ev.pageX,500+Math.random()*1000),1000);
        });
    });
});