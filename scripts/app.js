(function() {

	"use strict";

	// new xhr object
	var request = new XMLHttpRequest();
	request.open('GET', '../projects.json', true);
	request.addEventListener('readystatechage', function() {
		if (request.readyState === 4) {
			var filler = {};
			filler = JSON.parse(request.responseText);
			
			var paragraphs = [];
			
			
//// set your IIFE (Immediatley Invoked Function Expression)
//(function () {
//
//    console.log("App Started...");
//    
//    
//    //declared a named function way
//    /*
//    function replaceFirstParagraph() {
//        console.log("inside replaceFirstParagraph function");
//        var firstParagraph;
//
//        firstParagraph = document.getElementById("firstParagraph");
//
//        firstParagraph.innerHTML = "My New Paragraph Data";
//
//
//    }
//    */
//    
//    // declare an anoymous function with named allias
//    var replaceFirstParagraph = function() {
//        console.log("nside replaceFirstParagraph anonymous function");
//        var firstParagraph;
//
//        firstParagraph = document.getElementById("firstParagraph");
//
//        firstParagraph.innerHTML = "My name is Tyler Downey and I am student at Georgian College in the Interactive Web Design & Development programme. My goals after I graduate is to bring to the world is fantastic web design and dynamic user interface with each project that crosses my desk.";
//    };
//     var replacePortfolioPara1 = function() {
//        console.log("nside replacePortfolioPara1 anonymous function");
//        var portfolioPara1;
//
//        portfolioPara1 = document.getElementById("portfolioPara1");
//
//        portfolioPara1.innerHTML = "this is about my first portfolio work. alallalalalalaalalal";
//
//     
//
//    };
//    
//    // call the replaceFirstParagraph function
//    replaceFirstParagraph();
//    replacePortfolioPara1
//
//})();