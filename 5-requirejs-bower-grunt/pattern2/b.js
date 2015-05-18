define(["common"], function(common) {
	common.log("Defining b");
	return {
		b_main: function() {
			common.log("In b_main, Waiting for 10 seconds");
			setTimeout(function() {
				common.log("Out b_main");
			}, 10000);
		}
	}
});