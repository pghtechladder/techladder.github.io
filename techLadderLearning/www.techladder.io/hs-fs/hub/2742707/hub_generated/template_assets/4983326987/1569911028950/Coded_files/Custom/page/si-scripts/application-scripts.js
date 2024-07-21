window.onload = function() {
	// Style wide buttons site-wide
	var buttons = $('.button');
	var buttonsCount = buttons.length;
	for (var i = 0; i < buttonsCount; i++) {
		if ($(buttons[i]).width() > 280) {
			$(buttons[i]).addClass('wide-button');
		};
	};

	// Separate application form into distinct sections for styling
	var fieldsets = $('.hs-form.apply>fieldset');
	var headers = $('.hs-form.apply fieldset .hs-richtext');
	var headersLength = headers.length;
	var headerIndices = [];

	for (var i = 0; i < headersLength; i++) {
		headerIndices.push($(headers[i]).parent().prevAll().length);
	};

	for (var j = 0; j < headersLength + 1; j++) {
		if (j === 0) {
			fieldsets.slice(0, headerIndices[j]).wrapAll('<div class="application-form-section">');
		} else if (j === headersLength) {
			var remainingFieldsets = fieldsets.slice(0, fieldsets.length);
			var submit = $('.hs-form.apply div.hs_submit');
			var finalFormSection = remainingFieldsets.add(submit);
			finalFormSection.wrapAll('<div class="application-form-section">');
		} else {
			fieldsets.slice(0, headerIndices[j] - headerIndices[j - 1]).wrapAll('<div class="application-form-section">');
		};
		fieldsets = $('.hs-form.apply>fieldset');
	};

	var applicationFormSections = $('.application-form-section');
	var applicationFormSectionsLength = applicationFormSections.length;
	var triangleColor;
	for (var i = 0; i < applicationFormSectionsLength; i++) {
		if (i === 0 || i === 3) {
			triangleColor = '#eee';
		} else if (i === 2) {
			triangleColor = '#37aa7c';
		} else {
			triangleColor = '#fff';
		};
		if (i < applicationFormSectionsLength - 1) {
			$(applicationFormSections[i]).append('<div class="hanging-triangle" style="border-top: 25px solid ' + triangleColor + ';"></div>');
		}
	}

	// Add class to required inputs for styling purposes
	$('input:required').not('[type="file"]').parent().addClass('required-input-holder');
	$('input:required').not('[type="file"]').parent().parent().addClass('hide-required');
	$('textarea:required').parent().addClass('required-input-holder');
	$('textarea:required').parent().parent().addClass('hide-required');
}