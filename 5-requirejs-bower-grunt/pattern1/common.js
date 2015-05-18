define(["jquery"], function($) {
	$.find("#runningLog")[0].innerHTML += "<br/>Defining Common";
	return {
		log: function(message) {
			$.find("#runningLog")[0].innerHTML += "<br/>" + message;
		}
	}
});