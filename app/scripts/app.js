/*global define */
define(['localforage', 'backbone', 'marionette','views/home'], function (localforage, Backbone, Marionette, HomeView) {
		'use strict';

	window.App = new Backbone.Marionette.Application();
	var App = window.App;
	window.hm = new HomeView();
	App.addRegions({
//		menuRegion: ".popup-container",
//		footerRegion: "footer",
//		headerRegion: "h1",
//		subHeaderRegion: ".fixed-heading",
		mainRegion: "#main"
	});
	var HomeController =  Backbone.Marionette.Controller.extend({
		initialize: function () {
			App.mainRegion.show(new HomeView);
		}
	});
	new HomeController();
//		var App = function(){
////			Storage.set('score',0);
//			window.localforage = localforage;
//			var $score = $('#scoreDisplay');
//			console.log(localforage);
//			localforage.getItem("score").then(
//				function(value) {
//					if (value)
//						$score.html(value);
//					else
//						$score.html(0);
//				},
//				function(e) { console.log("get failed with error:", e); }
//			);
//			$('#scoreBtn').on('click',function(){
//				localforage.getItem("score").then(
//					function(value) {
//						localforage.setItem('score',value+1).then(function(){$score.html(value+1);});
//
//					},
//					function(e) { console.log("get failed with error:", e); }
//				);
//			});
//			console.log('hay hay hay');
//		};
		return App;
});