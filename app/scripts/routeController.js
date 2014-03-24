define(['views/home','views/about'],
	function (HomeView, AboutView) {
		"use strict";

		return {
			index:function() {
				App.mainRegion.show(new HomeView());
			},
			about: function() {
				App.mainRegion.show(new AboutView());
			}
		};
	});