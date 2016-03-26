// setup an IIFE
(function() {
	
	
	"use strict";
	//xhr object
	var request = new XMLHttpRequest();
	request.open('GET', '../projects.json', true);
	request.addEventListener('readystatechange', function() {
		// wait for file loa
		if (request.readyState === 4 && request.status === 200) {
			var projects = {};
			
			// read json object
			projects = JSON.parse(request.responseText);
			
			// declare local array container
			var paragraphArray = [];
			
			paragraphArray = projects.paragraphs;
			
			var paragrahArrayLength = paragraphArray.length;
			
			// loop through paragrapharray
			
			for(var number=0; Number < paragrahArrayLength; number++) {
				// creat a refence to each html element
				var paragraph = document.getElementById("paragraph" + (number+1) );
				paragraph.innerHTML = paragraphArray[number];
			}
		}
	});
	request.send();
	
})();