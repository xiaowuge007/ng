$(function() {
	//alert("11111111")
	var ps = document.getElementById("show").getElementsByTagName("p")
	
	$("#kw").keyup(function() {
		var kw = $("#kw").val();
		var qsData = { 'wd': kw };
		$.ajax({
			url: "https://sp0.baidu./5a1Fazu8AA54nxGko9WTAnF6hhy/su",
			type: "GET",
			dataType: 'jsonp',
			jsonp: 'cb',
			data: qsData,
			success: function(json) {
				console.log(json.s);	
				$.each(json.s,function(i,n){					
					/*$("#show").append($("<p>").textContent = n);*/
					$("#show p").eq(i).text(n);
				})
			},
			error: function(xhr) {
				console.log(xhr)
			}			
		});
	})
})