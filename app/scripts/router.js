define(['marionette', 'routeController'],
	function (marionette, Controller) {
		'use strict';

		return marionette.AppRouter.extend({
			appRoutes: {
				'': 'index',
				'about':'about'
			},
			controller: Controller
		});
	});