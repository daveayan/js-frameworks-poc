/**
 * bootstraps angular onto the window.document node
 */
define([
    'b',
    'c'
], function (b, c) {
    'use strict';
    console.log("Bootstrapping");
    someFunctionToCallAfterRequireIsSetup();

    b.b_main();
    c.c_main();
});