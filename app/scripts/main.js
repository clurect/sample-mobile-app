require.config({
		paths: {
				jquery: '../bower_components/jquery/jquery'
,
				bootstrap: 'vendor/bootstrap/bootstrap'

			,backbone: "../bower_components/backbone/backbone"
			,marionette: "../bower_components/marionette/lib/core/amd/backbone.marionette.min"
			,underscore: "../bower_components/underscore/underscore"
			,'backbone.babysitter':'../bower_components/backbone.babysitter/lib/amd/backbone.babysitter.min'
			,'backbone.wreqr':'../bower_components/backbone.wreqr/lib/amd/backbone.wreqr.min'
		},
		shim: {
				bootstrap: {
						deps: ['jquery'],
						exports: 'jquery'
				},
				"backbone": {
					"deps": ["underscore", "jquery"],
					"exports": "Backbone"
				},
				//Marionette
				"marionette": {
					"deps": ["underscore", "backbone", "jquery",'backbone.wreqr','backbone.babysitter'],
					"exports": "Marionette"
				}
		}
});

require(['app', 'jquery', 'bootstrap','localforage', 'backbone','marionette'], function (app, $) {
		'use strict';
		// use app here
		app();
		//console.log(app);
		console.log('Running jQuery %s', $().jquery);
});