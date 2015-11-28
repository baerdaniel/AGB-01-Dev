// All custom Javascript


$(document).ready(function(){
// alert("jquery working");

	// Language Toggles –--------------------------

	$('.language button').click(function(){
		$('.language button').removeClass('active');
		$(this).toggleClass('active');
		$('.text-body').hide();
	});

	$('button.deutsch').click(function(){
		$('.text-body.deutsch').fadeIn(500);
	});
	$('button.english').click(function(){
		$('.text-body.english').fadeIn(500);
	});

	$('button.deutsch').click();


// NEWS IMAGES –--------------------------

	// var vh = $(window).height();
	// var delta = vh/2;
	// var distance1 = $('#entry-1').offset().top - delta;
	// var distance2 = $('#entry-2').offset().top - delta;
	// var distance3 = $('#entry-3').offset().top - delta;


	// $(window).scroll(function() {
	//     if ( $(window).scrollTop() >= distance1 ) {
	//         $('#entry-1').addClass('active')
	//         $('#entry-2').removeClass('active');
	//     }
	//     if ( $(window).scrollTop() >= distance2 ) {
	//     	$('#entry-1').removeClass('active')
	//         $('#entry-2').addClass('active');
	//         $('#entry-3').removeClass('active');
	//     }
	//     if ( $(window).scrollTop() >= distance3 ) {
	//     	$('#entry-2').removeClass('active')
	//         $('#entry-3').addClass('active');
	//         $('#entry-4').removeClass('active');
	//     }
	//     else {}
	// });




// entry-1 to be changed when entry-1 hits top.
// entry-2 to be changed when entry-2 hits top.

});













// HIDE NAVIGATION –--------------------------
var didScroll;
var lastScrollTop = 0;
var delta = 30;
var navbarHeight = $('.header-menu').outerHeight();

$(document).ready(function(){
	$('.header-menu').mouseleave(function(){
		$(this).removeClass('nav-down').addClass('nav-up');
	},200);
});

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // If scrolled more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header-menu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header-menu').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


function callFlickity() {
    $('.main-gallery').flickity({
    	cellSelector: '.main-gallery .gallery-cell',
		cellAlign: 'center',
	  	wrapAround: true,
	  	lazyLoad: 2,
	  	contain: true,
	  	// selectedAttraction: 0.02,
	  	selectedAttraction: 0.02,
		// friction: 1,
	  	pageDots: false,
	  	imagesLoaded: true,
	  	accessibility: false,
	  	// freeScroll: true,
	  	setGallerySize: false,
	  	resize: true,
	  	setGallerySize: false,
	  	// autoPlay: true,
		  arrowShape: {
	      x0: 35,
	      x1: 70, y1: 35,
	      x2: 70, y2: 35,
	      x3: 70
	    }
	});
}

// Call function variable

$(window).resize(callFlickity);
$(window).load(callFlickity);