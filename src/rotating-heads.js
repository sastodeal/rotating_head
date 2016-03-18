/**
* Author: Sodhan Manandhar
* Description: Rotate heads on mouse hover
* Limitation: Currently only supports 5 images
*/
//TODO
/*
	1. Make this plugin for flexible so that it supports more/less images
 */
(function ( $ ) {

	$.fn.rotateHeads = function( options ){

			 var settings = $.extend({
					 total_banner_width: 2155,
					 total_width: 431,
					 number_of_images: 5
			 }, options );

		const single_width = settings.total_width / settings.number_of_images;

		var rotate_container = this;

	 		rotate_container.mousemove(function( e ){

							var parentOffset = $(this).parent().offset();
							var relativeXPosition = (e.pageX - parentOffset.left); //offset -> method allows you to retrieve the current position of an element 'relative' to the document

							if( relativeXPosition > 0 && relativeXPosition <= single_width ){
									$(this).css("background-position", settings.total_width * 0 +" 0");
							}

							if( relativeXPosition > single_width && relativeXPosition <= (single_width * 2) ){
								$(this).css("background-position", "-" + settings.total_width * 1 +"px" + " 0");
							}

							if( relativeXPosition > (single_width * 2) && relativeXPosition <= (single_width * 3) ){
								$(this).css("background-position", "-" + settings.total_width * 2 +"px" + " 0");
							}

							if( relativeXPosition > (single_width * 3) && relativeXPosition <= (single_width * 4) ){
								$(this).css("background-position", "-" + settings.total_width * 3 +"px" + " 0");
							}

							if( relativeXPosition > (single_width * 4) && relativeXPosition <= (single_width * 5) ){
								$(this).css("background-position", "-" + settings.total_width*4 +"px" + " 0");
							}

							if( relativeXPosition > (single_width * 5) && relativeXPosition <= (single_width * 6) ){
								$(this).css("background-position", "-" + settings.total_width*5 +"px" + " 0");
							}


			});

			return this;
	};

}( jQuery ));
