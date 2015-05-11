/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'js-framework-poc-angular'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['jsframeworkspocangularApp']);
    });
});