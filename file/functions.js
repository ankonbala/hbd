

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

// ============================================================
// Responsive auto-fit: scales the fixed 1100x680 stage (#wrap)
// to precisely fit ANY screen (phones, incl. 6.67" displays,
// tablets, desktops) using visualViewport when available so it
// also behaves correctly with mobile browser UI bars.
// Replaces the old fixed CSS breakpoints + full-page reload.
// ============================================================
var STAGE_W = 1100, STAGE_H = 680;

function fitStage() {
    var vv = window.visualViewport;
    var vw = vv ? vv.width : window.innerWidth;
    var vh = vv ? vv.height : window.innerHeight;

    // "contain" fit, with a small margin so nothing touches the edges
    var scale = Math.min(vw / STAGE_W, vh / STAGE_H) * 0.97;

    var $wrap = $('#wrap');
    if ($wrap.length) {
        $wrap.css('transform', 'scale(' + scale + ')');
    }

    clientWidth = vw;
    clientHeight = vh;
}

$(function() { fitStage(); });
$(window).on('resize orientationchange', fitStage);
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', fitStage);
}

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
