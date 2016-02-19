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

});
