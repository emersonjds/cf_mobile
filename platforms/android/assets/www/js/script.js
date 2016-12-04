$(document).ready(function() {
	$(".button-collapse").sideNav();

	$('.curtir').click(function(event) {
		event.preventDefault();		

		var $curtida = $('.badge', this);

		if($curtida.length === 0) {
			$curtida = $('<span class="new badge">0</span>').appendTo($(this));
		}
		$($curtida).text(parseInt($curtida.text()) + 1);

	});
});