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
	var $navBtn = $('#nav-toggle'),
		$navBar = $('#nav-menu');

	function hideNavbar() {
		$navBar.removeClass('js-navbar').animate({height: '0'}, 200);
	};

	$navBtn.on('click', function(event) {
		event.preventDefault();

		if($navBar.hasClass('js-navbar')){
			hideNavbar();

		} else {
			$navBar.addClass('js-navbar');
			var curHeight = $navBar.height();
			$navBar.css('height', 'auto');
			var autoHeight = $navBar.height();
			$navBar.height(curHeight).animate({height: autoHeight}, 200);
		}
	});

	//hide navbar then click outside .topline
	$('.topline').on('click', function(event) {
		event.stopPropagation();
	});

	$('body').on('click', function() {
		hideNavbar();
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
