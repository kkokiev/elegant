//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}

$(function () {

	//setup navbar show and hide
	var navBtn = $('#nav-toggle'),
		navBar = $('#nav-menu');

	navBtn.on('click', function(event) {
		event.preventDefault();

		if(navBar.hasClass('js-navbar')){
			navBar.removeClass('js-navbar');
			navBar.animate({height: '0'}, 200);

		} else {
			navBar.addClass('js-navbar');
			var curHeight = navBar.height();
			navBar.css('height', 'auto');
			var autoHeight = navBar.height();
			navBar.height(curHeight).animate({height: autoHeight}, 200);
		}
	});


	//setup smooth scrolling
	var $jsLink = $('.js-link')
	$jsLink.click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

});
