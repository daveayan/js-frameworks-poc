define(["common"], function(common) {
    common.log("Defining c");
    return {
        c_main: function() {
            common.log("In c_main, Waiting for 7 seconds");
            setTimeout(function() {
                common.log("Out c_main");
            }, 7 * 1000);
        }
    }
});