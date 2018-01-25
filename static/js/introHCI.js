'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("JavaScript has taken control");
        $(".jumbotron p").toggleClass("active");
        $("#testjs").text("Please wait...");


	});
	$("a.thumbnail").click(projectClick);

// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}


function projectClick(e) { 
    // prevent the page from reloading   
    console.log("Project clicked");   
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");

    var description = $($(this).closest(".project")).find(".project-description");
    if (description.length == 0) {
       $($(this).closest(".project")).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.fadeOut();
    }
}

