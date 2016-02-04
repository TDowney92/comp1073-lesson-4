"use strict";


// set your IIFE (Immediatley Invoked Function Expression)
(function () {

    console.log("App Started...");
    
    
    //declared a named function way
    /*
    function replaceFirstParagraph() {
        console.log("inside replaceFirstParagraph function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";


    }
    */
    
    // declare an anoymous function with named allias
    var replaceFirstParagraph = function() {
        console.log("nside replaceFirstParagraph anonymous function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";

    };
    
    // call the replaceFirstParagraph function
    replaceFirstParagraph();

})();