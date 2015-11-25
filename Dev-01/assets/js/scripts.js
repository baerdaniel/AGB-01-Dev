// All custom Javascript


$(document).ready(function(){
// alert("jquery working");

	// Language Toggles –--------------------------
	$('.text-body.english').hide();
	$('button.deutsch').addClass('active');

	$('button.deutsch').click(function(){
		$(this).addClass('active');
		$('button.english').removeClass('active');
		$('.text-body.english').hide();
		$('.text-body.deutsch').show();
	});
	$('button.english').click(function(){
		$(this).addClass('active');
		$('button.deutsch').removeClass('active');
		$('.text-body.english').show();
		$('.text-body.deutsch').hide();
	});



});

// HIDE NAVIGATION –--------------------------
var didScroll;
var lastScrollTop = 0;
var delta = 30;
var navbarHeight = $('.header-menu').outerHeight();

$(document).ready(function(){
	$('.header-menu').mouseleave(function(){
		$(this).removeClass('nav-down').addClass('nav-up');
	});
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
	      x0: 20,
	      x1: 70, y1: 20,
	      x2: 70, y2: 20,
	      x3: 70
	    }
	});
}

// Call function variable

$(window).resize(callFlickity);
$(window).load(callFlickity);