define(['backbone', 'marionette', 'text!tmpl/home.html'],
	function (Backbone, Marionette,tmpl) {
		return Backbone.Marionette.ItemView.extend({
			template: _.template(tmpl),
			onShow: function() {
				console.log('oioio');
			}
		});
	}
)