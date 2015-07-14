$(document).ready(function(){

	var maxappend = $(".item").length;
	var d = new Date();
	var mm = d.getMonth()+1;
	var dd = d.getDate();
	var today = mm+"/"+dd;

	$("#date").text(today);


	$("#add").on("touchstart", function() {
		if (maxappend < 3) {
		$("#list").append("<div class='item'><textarea cols='29' rows='1' maxlength='40' placeholder='Task' style='background:none; border:medium none;''></textarea></div>");
		$("#delete").css("display", "block");
		alert(maxappend);
		}
	});

	
	$("#delete").on("touchstart", function() {
		$(".done").remove();
	});		

	$(document).on("swipe", ".item", function() {
		if($(this).css("height")=="75px") {
    	$(this).css("background-color", "#40586b");
    	$(this).css("height", "76px");
    	$(this).addClass("done");

 		} else {
 			$(this).css("background-color", "white");
 			$(this).css("height", "75px");
 			$("textarea").prop("disabled", false);
 			$(this).removeClass("done");
 			$("textarea").css("color", "#636875");
 		}
	});

	$(document).on("swipe", "textarea", function() {
		if($(".item").css("height")=="75px"); {
 		$(this).css("color", "#fff");
 		$(this).prop("disabled", true);
		}  
	});



    
});