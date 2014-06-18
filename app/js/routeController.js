define(['views/home','views/quiz'],
	function (HomeView, QuizView) {
		"use strict";

		return {
			index:function() {
//				$('#nav-collapse').collapse('hide');
				App.mainRegion.show(new HomeView());
			},
			quiz: function() {
//				$('#nav-collapse').collapse('hide');
				App.mainRegion.show(new QuizView());
			}
		};
	});