require.config({

    // alias libraries paths
    paths: {
        'domReady': 'bower_components/requirejs-domready/domReady',
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        }
    },

    // kick start application
    deps: ['./bootstrap']
});