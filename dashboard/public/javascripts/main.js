$(document).ready(function(){
	console.log("fffffffffffffffff");
	$('#edit').on('click', function(ev){
		ev.preventDefault();
		console.log("hadasasdadasdasdasdasdasdadasdas");
		var li = $(this).closest('li');
		li.find('form.edit').show();
		li.find('div.text').hide();
	})

	$('button.btn.btn-default').on('click', function(ev){
		ev.preventDefault();
		var li = $(this).closest('li');
		li.find('form.edit').hide();
		li.find('div.text').show();
	})

	$('button.btn.btn-primary').on('click', function(ev){
		ev.preventDefault();
		$(this).closest('form').submit();
	})
})