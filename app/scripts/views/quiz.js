define(['backbone', 'marionette', 'text!tmpl/quiz.html', 'localforage'],
	function (Backbone, Marionette,tmpl,localforage) {
		'use strict';
		var out="";
		return Marionette.ItemView.extend({
			template: _.template(tmpl),
			className:'container',
			events: {
				'click form button':'submit'
			},
			onShow: function() {
			},
			submit: function() {
				out = "";
				var display = $('#info');
				display.css('display','none');
//				$('#load').css('display','');
//				$('#load').html('<div id="ajaxloader2"><div class="outer"></div><div class="inner"></div></div>');
//				$('#load').delay(500).fadeOut(400);
				out += $('input[name="ice cream"]:checked').parents('label').text() + " Ice Cream<br />";
				out += 'With toppings:\n';
				_.each($('input:checkbox'), function(v){
					if (v.checked)
						out += $(v).parents('label').text() + '<br />';
				});
				var txt = $('textarea').val();
				if (txt && txt!=="")
					out += 'Extra instructions: ' + txt;

				display.html(out).delay(1000).fadeIn(400);
			}
		});
	}
)