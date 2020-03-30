$(document).ready(function(){

$("button").click(function(){

	var search_data = $("input").val();
	var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" +search_data + "&format=json&callback=?";
	console.log(url);

	$.ajax({
		url: url,
		type: "GET",
		contentType: "application/json; charset=utf-8",
		async: false,
		dataType: "json",
		success: function(data){
			console.log(data);

			if (data[1].length == 0){
			$("#search_box").animate({ marginTop: "300px"}, 1000);
			$("#list").html("");
			}else{

				$("#search_box").animate({ marginTop: "20px"}, 1000);
				$("#list").html("");
				var output;
				for (var i=0; i<data[1].length; i++){
					output = '<div class="info">';
					output += '<a href="' + data[3][i] + '" target="_blank">';
					output += "<h3>" + data[1][i] + "</h3>";
					output += "<p>" + data[2][i] + "</p>";
					output += "</a>";
					output += "</div>";

					$("#list").append(output);
				}
			}
		}
	});

});
	
});