$(function(){
	router("home",$("#tabContainer"));
	$("#home").click(function(){
		router("home",$("#tabContainer"))
		console.log("V1V1V1")
	});
	$("#v1").click(function(){
		router("v1",$("#tabContainer"))
	});
	$("#v2").click(function(){
		router("v2",$("#tabContainer"))
	});
})