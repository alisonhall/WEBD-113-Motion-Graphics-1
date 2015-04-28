$(document).ready(function(){
	//When we click an item
	$('.item').on('click',function(){
		var $item = $(this).find('p');

		//If item has class showing, run slide()
		if($item.hasClass('showing')){
			slide();
		}
		//Else if length of showing elements > 0
		else if($('.showing').length > 0) {
			//Hide elements
			$('.showing').slideUp();
			//Remove class
			$('.showing').removeClass('showing');
			//Run slide()
			slide();
		}
		//Else run slide()
		else {
			slide();
		}

		function slide() {
			//If is showing, hide it
			if($item.hasClass('showing')) {
				$item.removeClass('showing');
				$item.slideUp();
			} 
			//Else show it
			else {
				$item.slideDown();
				$item.addClass('showing');
			}
		}
	});
}); //Closing ready method