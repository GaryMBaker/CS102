
$(window).scroll(function() {
	  if ($(window).scrollTop() >= 0){  

		$('header').addClass("sticky");
		var eqn = ($(window).scrollTop());

		$('.parallax').css('margin-top', "-"+eqn+'px')
		$('.parallax').css('margin-bottom', ""+eqn+'px')

		$('.horizontal-strip').css('margin-top', ""+eqn/5+'px')
		$('.horizontal-strip').css('margin-bottom', "-"+eqn/5+'px')

	} else {
		$('header').removeClass("sticky");
	}
});
// end of the scroll function for parallax and sticky header

/* Beginning of implementing typed.js */
$(function(){
	$("header h3 b").typed({
		strings: ["Developer.", "Programmer.", "Designer.", "Software Developer.", "Programmer.", "Websites."],
		typeSpeed: 0,
		loop: true
	});
});
/* End of typed.js theme script */

var pathname = window.location.pathname;
var url = "www.aaa.com/task1/1.3.html#a_1"; 
var hash = url.substring(url.indexOf("header ul li a")+1);

/*.Im not too sure will come back to this aye.. */



jQuery(document).ready(function($) {

	$('.my-slider').unslider({
		autoplay: true
	});

});

$(function() {
    $("#accordion").accordion({ header: "h3", navigation: true , active: "h3:last" });
});


$('#home').on('click', function(event) {
	$('header ul li').removeClass('active')
	$('header ul li:nth-child(1)').addClass('active')
	event.preventDefault();
	
	$('html, body').animate({
        scrollTop: 0
    }, 2000);

});

$('#servicesbtn').on('click', function(event) {
	$('header ul li').removeClass('active')
	$('header ul li:nth-child(2)').addClass('active')
	event.preventDefault();
	
	scrolling('#accordion', 60)
});

$('#aboutbtn').on('click', function(event) {
	$('header ul li').removeClass('active')
	$('header ul li:nth-child(3)').addClass('active')
	event.preventDefault();
	
	scrolling('#about', 120)
});

$('#contactbtn').on('click', function(event) {
	$('header ul li').removeClass('active')
	$('header ul li:nth-child(4)').addClass('active')
	event.preventDefault();
	
    scrolling('footer', 0)
});

$('#comboBtn').on('click', function(event) {
	event.preventDefault();
	
	scrollClick('#serviceWeb', 70)

});

$('#appBtn').on('click', function(event) {
	event.preventDefault();
	
	scrollClick('#app', 140)
});

$('#webBtn').on('click', function(event) {
	event.preventDefault();
	
	scrollClick('#web', 140)
});

$('#serviceAppBtn').on('click', function(event) {
	event.preventDefault();
	
	scrollClick('#serviceApp', 140)
});

$('#welcomeBtn').on('click', function(event) {
	event.preventDefault();
	
	scrollClick('#welcome', 140)
});

$('#serviceWebBtn').on('click', function(event) {
	event.preventDefault();

	scrollClick('#serviceWeb', 140)
});



function scrollClick(div, nums) {
	$('html, body').animate({
        scrollTop: $(div).offset().top - nums
    }, 2000);
	$(div).click()
}

function scrolling(div, nums) {
	$('html, body').animate({
        scrollTop: $(div).offset().top - nums
    }, 2000);
}







/* this the the begining of the raining feature */











































