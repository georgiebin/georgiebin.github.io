document.addEventListener("DOMContentLoaded", function() {
	var viewer = UstreamEmbed('UstreamIframe');
	var ccBtn = document.querySelector('.cc-btn');
	var ccOff = true;

	ccBtn.addEventListener("click", ccToggle);

	function ccToggle() {

		if (ccOff) {
			viewer.callMethod('cc', 0);
		} else {
			viewer.callMethod('cc', -1);
		}

		ccOff = !ccOff;
	}
});

