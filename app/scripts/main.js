require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
,
        bootstrap: 'vendor/bootstrap/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap','localforage'], function (app, $) {
    'use strict';
    // use app here
		app();
    //console.log(app);
    console.log('Running jQuery %s', $().jquery);
});