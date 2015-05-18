define(["common"], function(common) {
	common.log("Defining a");
	return {
		a_main: function() {
			common.log("In a_main, Waiting for 5 seconds");
			setTimeout(function() {
				common.log("Out a_main");
			}, 5000);
		}
	}
});