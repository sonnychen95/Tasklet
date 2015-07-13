$(document).ready(function(){

	var maxappend = $("div.item").length;


	$("#add").on("touchstart", function() {
		if (maxappend < 11) {
		$("#list").append("<div class='item'><textarea cols='29' rows='2' maxlength='80' placeholder='Task' style='background:none; border:medium none;''></textarea></div>");
		$("#delete").css("display", "block");
		} 
	});


	$("#delete").on("touchstart", function() {
		
			$(".done").remove();
	
	});

	$(document).on("swipe", ".item", function() {
		if($(this).css("height")=="68px") {
    	$(this).css("background-color", "#3e4554");
    	$(this).css("height", "69px");
    	$(this).addClass("done");

 		} else {
 			$(this).css("background-color", "white");
 			$(this).css("height", "68px");
 			$("textarea").prop("disabled", false);
 			$(this).removeClass("done");
 			$("textarea").css("color", "#636875");
 		}
	});

	$(document).on("swipe", "textarea", function() {
		if($(".item").css("height")=="68px"); {
 		$(this).css("color", "#636875");
 		$(this).prop("disabled", true);
		}  
	});



    
});