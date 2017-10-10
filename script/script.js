$(document).ready(function() {
	$(".grid").hover(function(){
		$(this).css("box-shadow", "5px 5px 5px 5px #888888");
	}, function(){
    	$(this).css("box-shadow", "0px 1px 6px 0px rgba(0,0,0,0.75)");
	});

});



