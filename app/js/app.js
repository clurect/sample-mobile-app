/*global define */
define(['localforage', 'backbone', 'marionette', 'views/header'], function (localforage, Backbone, Marionette,HeaderView) {
		'use strict';

	window.App = new Backbone.Marionette.Application();
	var App = window.App;
	App.addRegions({
		headerRegion: "#header",
		mainRegion: "#main"
	});
//	App.Router = Marionette.AppRouter.extend({
//		appRoutes: {
//			"":"index",
//			"about":"about"
//		}
//	});
	App.addInitializer(function() {
		App.headerRegion.show(new HeaderView());
//		new App.Router({
//			controller:routes
//		});
	});
		return App;
});