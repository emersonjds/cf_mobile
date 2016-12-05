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

	$('select').material_select();

	$('.enviar-doacao').click(function() {
		Materialize.toast('Sua doação foi enviada', 3000);
	});

	$('.enviar-dados-do-filme').click(function() {
		Materialize.toast('Dados cadastrados com sucesso', 3000);
	});

	$('.enviar-dados-email').click(function() {
		Materialize.toast('Dados enviados com sucesso', 3000);
	});

	$('.enviar-dados-de-usuario').click(function() {
		Materialize.toast('Cadastro efetuado com sucesso', 3000);
	});

	$('.cadastrarUsuario').click(function (event) {
		event.preventDefault();
		$('.modal-trigger').leanModal();
	});

	$('.recuperarSenha').click(function (event) {
		event.preventDefault();
		$('.modal-trigger').leanModal();
	});

	$('.dinheiro').click(function(event) {
		console.log('teste');
		event.preventDefault();
		$('.modal-trigger').leanModal();
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