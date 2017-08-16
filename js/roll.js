window.onload= function () {

var img_show=getObj("img_show")
var btn_up=getObj("btn_left");
var btn_down=getObj("btn_right");
var btn_ico=document.getElementsByTagName("span");
btn_down.addEventListener("click",function(){

roll(-600,-2400,"0px");
});

btn_up.addEventListener("click",function(){

roll(600,0,"-2400px");

});

function roll(speed,terminal,flag){

    var img_leftVal=parseInt(img_show.style.left);
    if(img_leftVal===terminal){
        img_show.style.left=flag;
        img_leftVal=parseInt(img_show.style.left);
    }
    else
    {
        img_leftVal+=speed;
        img_show.style.left=img_leftVal+"px";
    }
    for(var a=0;a<btn_ico.length;a++){
        btn_ico[a].setAttribute("class","");

    }

    btn_ico[img_leftVal/-600].setAttribute("class","on");


}

    for(var i=0;i<btn_ico.length;i++){
        (function (value) {
            btn_ico[value].onclick=function(){

                //修改选中的图片
                img_show.style.left=value*(-800)+"px";

                //设置所有btn_ico的状态为未选中
                for(var j=0;j<btn_ico.length;j++){
                    btn_ico[j].setAttribute("class","");
                }
                //设置选中的btn_ico的状态
                btn_ico[value].setAttribute("class","on");

            }
        })(i);
    }
}