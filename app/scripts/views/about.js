define(['backbone', 'marionette', 'text!tmpl/about.html', 'localforage'],
	function (Backbone, Marionette,tmpl,localforage) {
		'use strict';

		return Marionette.ItemView.extend({
			template: _.template(tmpl),
			className:'container',
			onShow: function() {
			}
		});
	}
)