$("section div p").hide();

$("section div header").on("click", function(){
	$("section div p").slideUp();
	$(this).next().slideToggle();

});