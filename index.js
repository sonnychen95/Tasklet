$(document).ready(function(){

	var maxappend = 0;


	$("#add").on("touchstart", function() {
		if (maxappend < 10) {
		$("#list").append("<div id='item'><textarea cols='29' rows='2' maxlength='80' placeholder='Task' style='background:none; border:medium none;''></textarea></div>");
		maxappend++
		} 
	});

	$(document).on("swipe", "#item", function() {
		$(this).append("<div id='delete'>X</div>")
    	$(this).css("background-color", "#28c3dd");
 		$(this).css("color", "white");
	});

	$("item").on("click", "#delete", function() {
		$(this).remove();
	});

    
});