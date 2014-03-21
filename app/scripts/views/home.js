define(['backbone', 'marionette'],
	function (Backbone, Marionette) {
		return Backbone.Marionette.ItemView.extend({
			template: _.template('HI!'),
			onShow: function() {
				console.log('oioio');
			}
		});
	}
)