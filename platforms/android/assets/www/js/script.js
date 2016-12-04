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

	$('.home').on('click', function() {
		$('.dados-home').removeClass('hide');
		$('.dados-home').addClass('show');
		$('#dados-filme').addClass('hide');
	});
	

	$('.filmes').on('click', function() {
		$('.dados-home').addClass('hide');
		$('#dados-filme').removeClass('hide');
		$('#dados-filme').addClass('show');
	});

	$('.noticias').on('click', function() {
		$('.dados-home').addClass('hide');
		$('#dados-filme').addClass('hide');
		$('#dados-noticias').removeClass('hide');
		$('#dados-noticias').addClass('show');
	});


});