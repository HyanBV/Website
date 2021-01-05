$(document).ready(() => {
	$(window).scroll(() => {
		(this.scrollY > 20) ? 
			$('.navbar').addClass("sticky") : 
			$('.navbar').removeClass("sticky");
		(this.scrollY > 500) ? 
			$('.scroll-up-btn').addClass("show") : 
			$('.scroll-up-btn').removeClass("show");
	});

	//Slide-up Script.
	$('.scroll-up-btn').click(() => {
		$('html').animate({scrollTop: 0});
	});

	//Toggle Menu/Navbar Script.
	$('.menu-btn').click(() => {
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	//Typing Animation Script.
	var typed = new Typed(".typing", {
		strings: ["Web Developer", "Chemical Engineer", "Graphic Designer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	var typed = new Typed(".typing-2", {
		strings: ["Web Developer", "Chemical Engineer", "Graphic Designer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	//Owl Carousel Script.
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},

			600: {
				items: 2,
				nav: false,
			},

			1000: {
				items: 3,
				nav: false,
			},
		}
	});
});

window.onload = function() {
	Particles.init({
    selector: '.background',
    maxParticles: '180',
    connectParticles: true,
    speed: 1.0,
    color: '#ffffff',

    //Breakpoints...
    responsive: [
    	{
    		breakpoint: 768,
    		options: {
    			maxParticles: '110',
			    connectParticles: true,
			    speed: 1.0,
    		}
    	},
    	{
    		breakpoint: 425,
    		options: {
    			maxParticles: '60',
			    connectParticles: true,
			    speed: 1.0,
    		}
    	},
    	{
    		breakpoint: 320,
    		options: {
    			maxParticles: '35',
			    connectParticles: true,
			    speed: 1.0,
    		}
    	}
    ]
  });
};