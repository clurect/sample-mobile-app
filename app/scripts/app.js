/*global define */
define(['localforage'], function (localforage) {
		'use strict';

		var App = function(){
//			Storage.set('score',0);
			window.localforage = localforage;
			var $score = $('#scoreDisplay');
			console.log(localforage);
			localforage.getItem("score").then(
				function(value) {
					if (value)
						$score.html(value);
					else
						$score.html(0);
				},
				function(e) { console.log("get failed with error:", e); }
			);
			$('#scoreBtn').on('click',function(){
				localforage.getItem("score").then(
					function(value) {
						localforage.setItem('score',value+1).then(function(){$score.html(value+1);});

					},
					function(e) { console.log("get failed with error:", e); }
				);
			});
			console.log('hay hay hay');
		};
		return App;
});