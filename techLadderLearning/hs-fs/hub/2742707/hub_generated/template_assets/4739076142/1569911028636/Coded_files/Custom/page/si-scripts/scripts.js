$(document).ready(function() {
	// Accordion for Tech Ladder Difference
	$('#two-col-accordion').on('click', '.inactive .zip-code-diff__header', function() {
		var twoColAccordion = $('#two-col-accordion');
		twoColAccordion.find('div.active').removeClass('active').addClass('inactive');
		$(this).parent().removeClass('inactive').addClass('active');
		// Only trigger this function on desktop sizes, when images are shown
		if (!(parseInt(twoColAccordion.find('.zip-code-diff__right-col').width()) === $(window).width())) {
			var height = twoColAccordion.find('.zip-code-diff__wrapper').height();
			setMarginAccordionVertical(height);
		}
		twoColAccordion.find('.inactive .custom-plus-holder').css('opacity', 1);
		$(this).find('.custom-plus-holder').css('opacity', 0);
	})

	var setMarginAccordionVertical = function(height) {
		var zipCodeDiffDivArray = $('.zip-code-diff>div', '#two-col-accordion');
		var zipCodeDiffDivLength = zipCodeDiffDivArray.length;
		for (var i = 0; i < zipCodeDiffDivLength; i++) {
			if ( $(zipCodeDiffDivArray[i]).hasClass('active') ) {
				$('.image-carousel', '#two-col-accordion').css('marginTop', '-' + (height * i).toString() + 'px');
			}
		}
	}

	var findHeightOfInnerText = function(elm) {
		var elmChildrenLength = elm.find('p').length;
		var insideHeight = 0;
		for (var i = 0; i < elmChildrenLength; i++) {
			insideHeight += $(elm.find('p')[i]).outerHeight(true);
		}
		return insideHeight;
	}

	var setHeightForAccordion = function() {
		var zipCodeDiff = $('.zip-code-diff', '#two-col-accordion');
		var totalHeight = parseInt(zipCodeDiff.css('paddingTop'));
		totalHeight += parseInt(zipCodeDiff.css('paddingBottom'));
		var accordionHeaders = zipCodeDiff.find('.zip-code-diff__header');
		var accordionHeadersLength = accordionHeaders.length;
		// First accordion should not have margin included in its outer height, because the same margin gets included in the header calculation
		totalHeight += $(accordionHeaders[0]).outerHeight();
		for (var i = 1; i < accordionHeadersLength; i++) {
			totalHeight += $(accordionHeaders[i]).outerHeight(true);
		}
		totalHeight += findHeightOfInnerText(zipCodeDiff.find('.zip-code-diff__content').sort(function(a,b) {
			return findHeightOfInnerText($(b)) - findHeightOfInnerText($(a));
		}).first());
		// Add padding of accordion content, taken from whichever one is currently open
		var activeZipCodeDiffContent = $('.active .zip-code-diff__content')
		totalHeight += parseInt(activeZipCodeDiffContent.css('paddingTop')) + parseInt(activeZipCodeDiffContent.css('paddingBottom'));
		totalHeight += zipCodeDiff.find('h2').outerHeight(true);
		zipCodeDiff.css('height', totalHeight).css('maxHeight', totalHeight);
		var zipCodeDiffRightCol = $('.zip-code-diff__right-col', '#two-col-accordion');
		$('.image-carousel', '#two-col-accordion').css('max-height', totalHeight);
		zipCodeDiffRightCol.css('height', totalHeight);
		// Only trigger this function on desktop sizes, when images are shown
		if (!(parseInt(zipCodeDiffRightCol.width()) === $(window).width())) {
			setMarginAccordionVertical(totalHeight);
		}
	}

	$(window).on('resize', function() {
		setHeightForAccordion();
	})

	setHeightForAccordion();
})

window.onload = function() {
	// Site-wide button restyling
	var buttons = $('.button');
	var buttonsCount = buttons.length;
	for (var i = 0; i < buttonsCount; i++) {
		if ($(buttons[i]).width() > 280) {
			$(buttons[i]).addClass('wide-button');
		};
	};

	// Request syllabus form manipulation
	var manipulateForm = function() {
		// Add class to div, for styling 
		$('input:required').parent().addClass('required-input-holder');
		clearInterval(formCheck);
	}

	var checkForForm = function() {
		return ($('.request-syllabus form').length > 0);
	}

	var formCheck = setInterval(function() {
		if (checkForForm()) {
			manipulateForm();
		}
	}, 500)
}