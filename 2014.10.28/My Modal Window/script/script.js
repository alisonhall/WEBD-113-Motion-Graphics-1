
$("body section button").on("click", function(){
	$(".content").addClass("fadedBackground");
	$(".modalWindow").addClass("showing");
});

$(".modalWindow button").on("click", function(){
	$(".content").removeClass("fadedBackground");
	$(".modalWindow").removeClass("showing");
});