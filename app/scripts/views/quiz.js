define(['backbone', 'marionette', 'text!tmpl/quiz.html', 'localforage'],
	function (Backbone, Marionette,tmpl,localforage) {
		'use strict';
		var out="", answers, that;
		return Marionette.ItemView.extend({
			template: _.template(tmpl),
			className:'container',
			events: {
				'click form button':'submit',
				'click #testBtn':'test',
				'keypress #test' : 'test'
			},
			initialize: function() {
				that = this;
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
			},
			test: function() {
				var sel = $('[name="test"]:checked'),
					disp = 0,
					valid =['t1','t3','t6'],
					label = $('.label');
				_.each(sel,function(v){
					if (_.contains(valid, v.id))
						disp++;
					else
						disp--;
				});
				if (disp === 3)
					label.html('Yay! You got them all right!').removeClass('label-danger').addClass('label-success').css('display','');
				else
					label.html('You didn\'t get all the right answers. :(').removeClass('label-success').addClass('label-danger').css('display','');
			}
		});
	}
)