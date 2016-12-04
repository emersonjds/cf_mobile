$(document).ready(function() {

	$('.camera').on('click', function(){
		cordova.plugins.barcodeScanner.scan(
			function (resultado) {
				if (resultado.text) {
					Materialize.toast('Mesa ' + resultado.text, 2000);
					$('#numero-mesa').val(resultado.text);
				}
			},
			function (error) {
				Materialize.toast('Erro: ' + error, 3000, 'red-text');
			}
			);
	});

	$('.enviar-pedido').click(function() {
		$.ajax({
			url: 'http://cozinhapp.sergiolopes.org/novo-pedido',
			data: {
				mesa: 25,
				pedido: '2 BOLO DE DE CENOURA E UM CAPPUCCINO'
			},
			success: function(resposta) {
				console.log('Foi' + resposta);
			},
			erro: function(erro) {
				console.log('Deu ruim' + erro.responseText, 3000);
			}
		}); 
	}); 
});