require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery'
		,bootstrap: 'vendor/bootstrap/bootstrap'
		,backbone: "../bower_components/backbone/backbone"
		,marionette: "../bower_components/marionette/lib/core/amd/backbone.marionette.min"
		,underscore: "../bower_components/underscore/underscore"
		,'backbone.babysitter':'../bower_components/backbone.babysitter/lib/amd/backbone.babysitter.min'
		,'backbone.wreqr':'../bower_components/backbone.wreqr/lib/amd/backbone.wreqr.min'
		,'tmpl':'../templates'
		,"handlebars": "../bower_components/handlebars/handlebars.min"
		,'hbs':'vendor/hbs'
		,"i18nprecompile": "vendor/i18nprecompile"
		,"json2": "vendor/json2"
		,'text':'vendor/text'
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
		},
		"handlebars": {
			"exports": "Handlebars"
		}
	},
	hbs: {
		templateExtension: "html",
		helperDirectory: "templates/helpers/",
		i18nDirectory: "templates/i18n/",

		compileOptions: {}        // options object which is passed to Handlebars compiler
	}
});

require(['app','router','backbone','localforage', 'jquery', 'bootstrap', 'marionette'], function (app, router, Backbone, localforage, $) {
	'use strict';
	new router();
	// use app here
	window.localforage = localforage;
	app.start();
	Backbone.history.start();

	//console.log(app);
	console.log('Running jQuery %s', $().jquery);
});