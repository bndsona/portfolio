
$(document).ready(function(){
	$('.menu').click(function(){
		var a=$(this).attr('data-filter');
		if (a=='all') {
			$('.item').show('1000');
		}
		else{
			$('.item').not('.'+a).hide('1000');
			$('.'+a).show('1000');
		}

	})

})