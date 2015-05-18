define(["a", "b", "common"], function(a, b, common) {
	common.log("Defining ab");
	return {
		ab_main: function() {
			a.a_main();
			b.b_main();
			common.log("In ab_main, Waiting 7 seconds");
			setTimeout(function() {
				common.log("Out ab_main");
			}, 7000);
		}
	};
});