document.addEventListener("DOMContentLoaded", function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right' ],
		navbar: {
			title: '<img src="images/dest/logo-1.svg" alt="Салон красоты">'
		},
		hooks: {
		"open:finish": () => {
			let openPanel = document.querySelector('.hamburger');
			openPanel.classList.add('is-active');
		},
		"close:finish": () => {
			let closePanel = document.querySelector('.hamburger');
			closePanel.classList.remove('is-active');
		}
		}
	});

	$('.services__carousel').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
	});

	function carouselServices(){
		$('.services__item').each(function() {
			var ths = $(this),
				thsh = ths.find('.services__content').outerHeight();
				ths.find('.services__images').css('min-height', thsh);
		});
	}
	carouselServices();

	$('.services__content-title').each(function() {
		$(this).html( $(this).html().replace(/(\S+)\s*$/,'<span>$1</span>') );
	})
});
