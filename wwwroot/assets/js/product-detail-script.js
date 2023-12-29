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
})(jQuery);