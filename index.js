$(document).ready(function(){
	var maxappend = 0;

	$("#add").click(function(e) {
		if (maxappend < 10) {
		$("#list").append("<input>");
		maxappend++
		} 

		if (maxappend > 0) {
			document.getElementById("list").style.marginTop = "95px";
		}
	});

	Hammer(document.getElementById("list")).on("swipe", function() {
          alert("hi");  
    });
    
});