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

	
});
