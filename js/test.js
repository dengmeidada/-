$(window).load(function(){
waterfall();
// var dataInt={"data":[{"src":"cars/1.jpg"},{"src":"cars/2.jpg"},{"src":"cars/3.jpg"},{"src":"cars/4.jpg"}]}
// $(window).scroll(function(){
// if(checkScrollSlide){
// $.each(dataInt.data,function(key,value){
// var oBox=$("<div>").addClass("box").appendTo($("#all"));
// var oPic=$("<div>").addClass("pic").appendTo($(oBox));
// var oImg=$("<img>").attr("src",$(value).attr("src")).appendTo($(oPic));
// })
// waterfall();
// }
// })
})

function waterfall(){
var $boxs=$("#all>div");
var w=$boxs.eq(0).outerWidth();
var cols=Math.floor($(window).width()/w);
$('#all').width(w*cols).css("margin","0 auto");
var hArr=[];
$boxs.each(function(index,value){
var h=$boxs.eq(index).outerHeight();
if(index<cols){
hArr[index]=h;
}else{
var minH=Math.min.apply(null,hArr);
var minHIndex=$.inArray(minH,hArr);
// console.log(minH);
$(value).css({
'position':'absolute',
'top':minH 'px',
'left':minHIndex*w 'px'
})
hArr[minHIndex] =$boxs.eq(index).outerHeight();
}
});
}


//function checkScrollSlide(){
// var $lastBox=$("#all>div").last();
// var lastBoxDis=$lastBox.offset().top Math.floor($lastBox.outerHeight()/2);
// var scrollTop=$(window).scrollTop();
// var documentH=$(window).height();
// return(lastBoxDis<scrollTop documentH)?true:false;
//}
