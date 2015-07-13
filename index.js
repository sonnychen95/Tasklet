$(document).ready(function(){

	var maxappend = 0;


	$("#add").on("touchstart", function() {
		if (maxappend < 10) {
		$("#list").append("<div id='item'><textarea cols='29' rows='2' maxlength='80' placeholder='Task' style='background:none; border:medium none;''></textarea></div>");
		maxappend++
		} 
	});

	$(document).on("swipe", "#item", function() {
		if($(this).css("height")=="68px") {
    	$(this).css("background-color", "#8f9fbc");
 		$(this).css("color", "red");
 		$(this).css("height", "69px");
 		$("textarea").prop("disabled", true);
 		} else {
 			$(this).css("background-color", "white");
 			$(this).css("height", "68px");
 			$("textarea").prop("disabled", false);

 		}
	});

    
});