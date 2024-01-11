<<<<<<< HEAD
;(function($){
    $(function (){

    	$(".fold-table tr.view td:not(:first-child)").on("click", function() {
	    	$(this).parent().toggleClass("open").next(".fold").toggleClass("open");
	  	});

	  	$('.p__related-products').slick({
	        dots: false,
	        infinite: false,
	        autoplay: false,
	        speed: 300,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	    });
    });
=======
;(function($){
    $(function (){

    	$(".fold-table tr.view td:not(:first-child)").on("click", function() {
	    	$(this).parent().toggleClass("open").next(".fold").toggleClass("open");
	  	});

	  	$('.p__related-products').slick({
	        dots: false,
	        infinite: false,
	        autoplay: false,
	        speed: 300,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	    });
    });
>>>>>>> 2c8e14b (Updated code Jan 11 2024)
})(jQuery);