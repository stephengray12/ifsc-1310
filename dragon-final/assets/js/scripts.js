
// Carousel js functionality

$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000
    });


});

// Accordion js functionality

$(document).ready(function(){

	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();


	$(".accordion h3").click(function(){
	
	  $(this).next("p").slideToggle("slow")
	  .siblings("p:visible").slideUp("slow");
	  $(this).toggleClass("active");
	  $(this).siblings("h3").removeClass("active");
	
	});

});