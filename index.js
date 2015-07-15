$(document).ready(function(){

	var d = new Date();
	var month = new Array();
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";
	var mm = month[d.getMonth()];
	var dd = d.getDate();
	var today = mm+" "+dd;

	$("#date").text(today);


	$(document).on("touchstart", "#add", function() {
		var maxappend = $(".item").length+1;
		if (maxappend < 11) {
		$("#list").append("<div class='item'><textarea cols='28' rows='2' maxlength='60' placeholder='Task' style='background:none; border:medium none;''></textarea></div>");
		$("#delete").css("display", "block");
		$("#empty").css("display", "none");
		}
	});

	
	$("#delete").on("touchstart", function() {
		$(".done").remove();
		var maxappend = $(".item").length;
		if (maxappend == 0) {
			$(this).css("display", "none");
			$("#empty").css("display", "block");
		}
	});		

	$(document).on("swipe", ".item", function() {
		if($(this).css("height")=="75px") {
		$(this).append("<img class='complete' src='images/greencheck.png'>")
    	$(this).css("background-color", "#40586b");
    	$(this).css("height", "76px");
    	$(this).addClass("done");


 		} else {
 			$(this).children("img").remove();
 			$(this).css("background-color", "white");
 			$(this).css("height", "75px");
 			$(this).removeClass("done");
 		}
	});
	
    
});