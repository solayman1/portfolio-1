$(document).ready(function(){

/*mixitup*/
	var container = document.querySelector('.gallery');
	var mixer = mixitup(container,{
		selectors : {
			control : '[mixcontrol]'
		}
	});

/*Slick slider*/

      $('.item').slick({
        loop:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        nextArrow:'<a href="#slidearro" class="right-arrow"><i class="fas fa-angle-right"></i></a>',
        prevArrow:'<i class="fas fa-angle-left prevarrow"></i>',

        	speed:1000,

 });


/*owl carousel*/
$(".owl-carousel").owlCarousel({
	autoplay:true,
	autoplayTimeout:2000,
	loop:true,
	smartSpeed:500,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});

/*wow plugin*/
    new WOW().init();
/*Scroll Top*/

	$(".top").click(function(){
		$("html ,body").animate({
			scrollTop:0,
		}, 1000);
	});

	$(window).scroll(function(){
		var ourwindow = $(this).scrollTop();
		if(ourwindow<100){
			$(".top").fadeOut();
			}else{
			$(".top").fadeIn();
			}
	});


/*Header Menu*/
$(".header-bottom .navbar-nav li  ").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});

/*Tab menu*/

$(".nav-list li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});
/*sticky header*/
    $("#sticky_header").sticky({topSpacing:0});
/*search form*/
 $(".search-box i").click(function(){
 	$(".search-box .form-control").toggle();
 });

/*jquery-ui tab*/
 
  $( function() {
    $( "#tab" ).tabs();
  });

$('.navbar-nav a[href*="#"]').click(function(e){
	e.preventDefault();
	var target = this.hash;
	$("html,body").animate({
		scrollTop: $(target).offset().top - 97
	},500);
});








});
