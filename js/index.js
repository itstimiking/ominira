import $ from 'jquery';
import 'bootstrap';
import lax from 'lax.js';



window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)

	$("#sidenav-trigger").click(function(){
		if($("#navSlide").hasClass("nav_slide_off")){
			$("#navSlide").addClass("nav_slide_on");
			$("#navSlide").removeClass("nav_slide_off");
		}else{
			$("#navSlide").addClass("nav_slide_off");
			$("#navSlide").removeClass("nav_slide_on");
		}
	})

	$("#userslider").click(function(){
		if($("#dash_navslider").hasClass("nav_slide_off")){
			$("#dash_navslider").addClass("nav_slide_on");
			$("#dash_navslider").removeClass("nav_slide_off");
		}else{
			$("#dash_navslider").addClass("nav_slide_off");
			$("#dash_navslider").removeClass("nav_slide_on");
		}
	})

}

document.onreadystatechange = function () {


	if(document.readyState == "complete") {
		$('#pagecontent').css("display","block");
		$('#preloader').css("display","none");
	}
}






