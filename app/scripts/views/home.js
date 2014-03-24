define(['backbone', 'marionette', 'text!tmpl/home.html', 'localforage'],
	function (Backbone, Marionette,tmpl,localforage) {
		'use strict';
		var $score;
		return Marionette.ItemView.extend({
			template: _.template(tmpl),
			className:'container',
			events: {
				'click #scoreBtn':'changeScore'
			},
			changeScore: function() {
				localforage.getItem("score").then(
					function(value) {
						localforage.setItem('score',value+1).then(function(){$score.html(value+1);});
					},
					function(e) { console.log("get failed with error:", e); }
				);
			},
			onShow: function() {
				$score = $('#scoreDisplay');
				this.infoTip();
				localforage.getItem("score").then(
					function(value) {
						if (value)
							$score.html(value);
						else
							$score.html(0);
					},
					function(e) { console.log("get failed with error:", e); }
				);
			},
			infoTip: function () {
				var targets = $('[rel~=tooltip]'),
					target = false,
					tooltip = false,
					title = false,
					tip,
					open = false;
				var openTooltip = function (target) {
					tip = target.attr('title');
					tooltip = $('<div id="tooltip"></div>');

					if (!tip || tip === '')
						return false;

					target.removeAttr('title');
					tooltip.css('opacity', 0)
						.html(tip)
						.appendTo('body');

					var init_tooltip = function () {

						if ($(window).width() < tooltip.outerWidth() * 1.5)
							tooltip.css('max-width', $(window).width() / 2);
						else
							tooltip.css('max-width', 340);

						var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
							pos_top = target.offset().top - tooltip.outerHeight() - 20;

						if (pos_left < 0) {
							pos_left = target.offset().left + target.outerWidth() / 2 - 20;
							tooltip.addClass('left');
						}
						else
							tooltip.removeClass('left');

						if (pos_left + tooltip.outerWidth() > $(window).width()) {
							pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
							tooltip.addClass('right');
						}
						else
							tooltip.removeClass('right');

						if (pos_top < 0) {
							pos_top = target.offset().top + target.outerHeight();
							tooltip.addClass('top');
						}
						else
							tooltip.removeClass('top');

						tooltip.css({ left: pos_left, top: pos_top })
							.animate({ top: '+=10', opacity: 1 }, 50);
						target.unbind('click');
					};

					init_tooltip();
					$(window).resize(init_tooltip);

					var remove_tooltip = function () {
						tooltip.animate({ top: '-=10', opacity: 0 }, 50, function () {
							$(this).remove();
						});
						tooltip.unbind('click');
						target.unbind('click');
						target.bind('click', function () {
							openTooltip($(this));
						});
						target.attr('title', tip);
					};

					target.bind('mouseleave', remove_tooltip);
					tooltip.bind('click', remove_tooltip);
					target.bind('click', remove_tooltip);
				};
				targets.bind('mouseenter', function () {
					openTooltip($(this));
				});
				targets.bind('click', function() {
					if (!open)
						openTooltip($(this));
				});
			}
		});
	}
)