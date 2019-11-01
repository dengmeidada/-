// gotop效果
$(document).ready(function() {

 $('.gotop a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
 });

});


//換圖效果
function $id(id){
	   return document.getElementById(id);
}

window.addEventListener("load", function(){
	
	

    var curIndex = 0;
    $id("btnLeft").onclick = function(e){
		
        var wrap = document.getElementsByClassName("wrap")[0];
        var btnLeft = $id("btnLeft");    
        curIndex--;
        wrap.style.left = -240 * curIndex + "px";
        btnRight.disabled = false;
        if( curIndex == 0){
            btnLeft.disabled = true;
        }
    }

    $id("btnRight").onclick = function(e){
        var wrap = document.getElementsByClassName("wrap")[0];
        var items = document.getElementsByClassName("item");
        var btnLeft = $id("btnLeft");
        curIndex++;
        wrap.style.left = -240 * curIndex + "px";

        btnLeft.disabled = false;
        if( curIndex == items.length-5){
            btnRight.disabled = true;
        }
    }

})


//點擊效果
	function showLarge(e){
		let smallsrc= e.target.scr;
		document.getElementsByClassName('large').scr=smallsrc.replace()
	}




	function showLarge( e ){
		let smallSrc = e.target.src; 
		document.getElementById("large").src = smallSrc.replace("SM_","");
	
	}
	
	function init(){
		let imgs = document.querySelectorAll(".itemPanel img");
		for(let i=0; i<imgs.length; i++){
			imgs[i].onclick = showLarge;
		}
	}
	
	window.onload = init;
