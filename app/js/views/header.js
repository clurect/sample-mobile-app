define(['backbone', 'marionette', 'text!tmpl/header.html', 'localforage'],
	function (Backbone, Marionette,tmpl,localforage) {
		'use strict';
		var out="";
		return Marionette.ItemView.extend({
			template: _.template(tmpl),
			className:'navbar navbar-inverse navbar-static-top',
			events: {
				'click #nav-collapse a':'close',
				'click a.navbar-brand':'close'
			},
			onShow: function() {
			},
			close: function() {
				$('#nav-collapse').collapse('hide');
				console.log('closing');
			}
		});
	}
)