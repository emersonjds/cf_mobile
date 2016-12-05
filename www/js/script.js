$(document).ready(function() {
	$(".button-collapse").sideNav();

	$('.curtir').click(function(event) {
		event.preventDefault();		

		var $curtida = $('.badge', this);

		if($curtida.length === 0) {
			$curtida = $('<span class="badge">0</span>').appendTo($(this));
		}
		$($curtida).text(parseInt($curtida.text()) + 1);
	});

	$('.favoritar').click(function (event) {
		event.preventDefault();
		$(this).css('color', 'gray');
	});

	$('.home').on('click', function() {
		$('.dados-home').removeClass('hide');
		$('.dados-home').addClass('show');
		$('#dados-filme').addClass('hide');
		$('#dados-favoritos').addClass('hide');
		$('#dados-noticias').addClass('hide');
	});
	

	$('.filmes').on('click', function() {
		$('#dados-filme').removeClass('hide');
		$('#dados-filme').addClass('show');
		$('.dados-home').addClass('hide');
		$('#dados-favoritos').addClass('hide');
		$('#dados-noticias').addClass('hide');
	});

	$('.favoritos').on('click', function() {
		$('.dados-home').addClass('hide');
		$('#dados-filmes').addClass('hide');
		$('#dados-noticias').addClass('hide');
		$('#dados-favoritos').removeClass('hide');
		$('#dados-favoritos').addClass('show');

	});

	$('.noticias').on('click', function() {
		$('#dados-noticias').removeClass('hide');
		$('#dados-noticias').addClass('show');
		$('.dados-home').addClass('hide');
		$('#dados-filme').addClass('hide');
		$('#dados-favoritos').addClass('hide');
	});


	$('#adicionar-filme').click(function() {
		$('.modal-trigger').leanModal();
	});
	
});