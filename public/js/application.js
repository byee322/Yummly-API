$(document).ready(function() {
	$('form[name="search"]').on('submit', function(e){
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/search',
			data: $(this).serialize()
		}).done(function(data){
			$('#bottom').html(data);
		});
	});

	$('#bottom').on('click','.show_ingredients', function(e){
		e.preventDefault();
		$(this).next().toggle('fast');
	});
});
