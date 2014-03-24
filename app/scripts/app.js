/*global define */
define(['localforage', 'backbone', 'marionette','views/home', 'views/about'], function (localforage, Backbone, Marionette, HomeView, AboutView) {
		'use strict';

	window.App = new Backbone.Marionette.Application();
	var App = window.App;
	App.addRegions({
		mainRegion: "#main"
	});
//	App.Router = Marionette.AppRouter.extend({
//		appRoutes: {
//			"":"index",
//			"about":"about"
//		}
//	});
	App.addInitializer(function() {
//		new App.Router({
//			controller:routes
//		});
	});
		return App;
});