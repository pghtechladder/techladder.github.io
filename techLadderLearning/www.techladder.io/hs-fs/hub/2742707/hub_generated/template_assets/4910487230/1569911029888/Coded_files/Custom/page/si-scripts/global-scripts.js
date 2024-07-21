$(document).ready(function() {
	// Detect if user is on IE10
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	// Accordion Custom Module Behavior
	var allExpanded = false;
	var accordionSections = $('.accordion__inner-wrapper');
	var accordionContentSections = accordionSections.find('.accordion__content');
	var accordionCount = accordionSections.length;
	var openAccordionContent = [];

	accordionSections.on('click', function() {
		var clickedSection = $(this);
		var clickedAccordionContent = clickedSection.find('.accordion__content');
		if (clickedSection.hasClass('open')) {
			clickedAccordionContent.css('max-height', 0);
			clickedSection.removeClass('open').removeClass('closed');
			if (allExpanded) {
				openAccordionContent.splice(openAccordionContent.index(clickedAccordionContent), 1);
				if (openAccordionContent.length === 0) {
					allExpanded = false;
				}
			}
		} else {
			if (!allExpanded) {
				var currentlyOpen = $('.accordion__inner-wrapper.open').first();
				currentlyOpen.find('.accordion__content').css('max-height', 0);
				currentlyOpen.removeClass('open').addClass('closed');
				openAccordionContent = [];
				openAccordionContent.push(clickedAccordionContent);
			}
			findHeightOfPTags(clickedAccordionContent);
			clickedAccordionContent.one(whichTransitionEvent(clickedAccordionContent), function() {
				checkScrollHeight($(this));
			});
			clickedSection.removeClass('closed').addClass('open');
			openAccordionContent.push(clickedAccordionContent);
		};
	});

	$('.expand-all').on('click', function(e) {
		e.preventDefault();
		expandAll();
	})

	$('.collapse-all').on('click', function(e) {
		e.preventDefault();
		collapseAll();
	})

	var findHeightOfPTags = function(section) {
		var pTags = section.find('p');
		var pTagsLength = pTags.length;
		var height = 0;
		for (var i = 0; i < pTagsLength; i++) {
			height += $(pTags[i]).outerHeight(true);
		}
		section.css('max-height', height + section.find('ul').outerHeight(true));
	}

	var whichTransitionEvent = function(elm) {
		var t;
		var transitions = {
			"transition"		: "transitionend",
			"OTransition"		: "oTransitionEnd",
			"MozTransition"		: "transitionend",
			"WebkitTransition"	: "webkitTransitionEnd"
		};
		for (t in transitions) {
			if (elm[0].style[t] !== undefined) {
				return transitions[t];
			}
		}
	}

	var checkScrollHeight = function(elm) {
		var userScrollTop = $(window).scrollTop();
		var headerScrollTop = elm.parent().find('.accordion__header').offset().top;
		if (headerScrollTop < userScrollTop) {
			$('html, body').animate({
				scrollTop: headerScrollTop
			}, 300);
		} 
	}

	var expandAll = function() {
		var allAccordions = $('.accordion__content');
		var allAccordionsLength = allAccordions.length;
		for (var i = 0; i < allAccordionsLength; i++) {
			findHeightOfPTags($(allAccordions[i]));
		}
		accordionSections.removeClass('closed').addClass('open');
		allExpanded = true;
		openAccordionContent = allAccordions;
	}

	var collapseAll = function() {
		$('.accordion__content').css('max-height', 0);
		accordionSections.removeClass('open').addClass('closed');
		allExpanded = false;
		openAccordionContent = [];
	}

	$(window).on('resize', function() {
		if (openAccordionContent.length > 0) {
			var openAccordionContentLength = openAccordionContent.length;
			for (var i = 0; i < openAccordionContentLength; i++) {
				if ($(openAccordionContent[i]).parent().hasClass('open')) {
					findHeightOfPTags($(openAccordionContent[i]));
				}
			}
		};
	});

	// Generalized local anchor link scrolling text
	var scrollToHeight = function(height) {
		$('html, body').animate({
			scrollTop: height
		}, 500);
	};

	$('a[href^="#"]').not('[href="#"]').not('[href="#sidr"]').not('[href="#subscribe-form"]').on('click', function(e) {
		e.preventDefault();
		var target = $(this.hash);
		scrollToHeight(target.offset().top);
	});

	$('a[href="#"]').on('click', function(e) {
		e.preventDefault();
		scrollToHeight(0);
	});

	// Force HubSpot to not resize SVGs
	var svgArray = $('img[src*=".svg"]');
	var svgCount = svgArray.length;
	for (var i = 0; i < svgCount; i++) {
		$(svgArray[i]).attr('src', $(svgArray[i]).attr('src').split('.svg')[0] + '.svg');
	};

	// Trigger click on button if surrounding div is clicked
	$(window).one('click', 'form div.actions', function() {
		if ($(this).children('input').length > 0) {
			$(this).children('input').click();
		};
	});

	// Generalized count up animation script
	var countUpFastElms = $('.count-up-fast');
	var countUpFastCount = countUpFastElms.length;
	var countUpMediumElms = $('.count-up-med');
	var countUpMediumCount = countUpMediumElms.length;
	var countUpSlowElms = $('.count-up-slow');
	var countUpSlowCount = countUpSlowElms.length;
	var countUpSlowestElms = $('.count-up-slowest');
	var countUpSlowestCount = countUpSlowestElms.length;
	var allCountUpElms = [];
	var countUpObject, countUpElmsTotal, elmTop, elmBottom;

	var addCountUpsToTotal = function (count, array, speed) {
		for (var i = 0; i < count; i++) {
			countUpObject = {
				elm: array[i],
				speed: speed,
				visible: false
			};
			allCountUpElms.push(countUpObject);
		};
	}

	addCountUpsToTotal(countUpFastCount, countUpFastElms, 'fast');
	addCountUpsToTotal(countUpMediumCount, countUpMediumElms, 'medium');
	addCountUpsToTotal(countUpSlowCount, countUpSlowElms, 'slow');
	addCountUpsToTotal(countUpSlowestCount, countUpSlowestElms, 'slowest');

	countUpElmsTotal = allCountUpElms.length;

	var insertCommaForLargeNum = function(num) {
		var largeNumArray = Math.floor(num).toString().split('');
		var largeNumLength = largeNumArray.length;
		largeNumArray[largeNumLength - 4] = largeNumArray[largeNumLength - 4] + ',';
		return largeNumArray.join('');
	};

	var showNumber = function(countUpObject) {
		var $this = $(countUpObject.elm);
		var num = $this.attr('data-count');
		var duration;
		if (countUpObject.speed === 'fast') {
			duration = 700;
		} else if (countUpObject.speed === 'medium') {
			duration = 1200;
		} else if (countUpObject.speed === 'slow') {
			duration = 2000;
		} else {
			duration = 3000;
		};
		$({ countNum: $this.text() }).animate({
			countNum: num
		},
		{
			duration: duration,
			easing: 'linear',
			step: function() {
				if (Math.floor(this.countNum).toString().length > 4) {
					$this.text(insertCommaForLargeNum(this.countNum));
				} else {
					$this.text(Math.floor(this.countNum));
				};
			},
			complete: function() {
				if (this.countNum.toString().length > 4) {
					$this.text(insertCommaForLargeNum(this.countNum));
				} else {
					$this.text(this.countNum);
				};
			}
		})
		if ($this.closest('[class*="span"]').find('.count-up__symbol').length > 0) {
			$this.closest('[class*="span"]').find('.count-up__symbol').css('opacity', 1);
		};
		if ($this.closest('[class*="span"]').find('.count-up__img').length > 0) {
			$this.closest('[class*="span"]').find('.count-up__img').css('opacity', 1);
		};
		countUpObject.visible = true;
	}

	var testForVisibility = function() {
		var screenTop = $(document).scrollTop();
		var screenBottom = screenTop + $(window).height();
		for (var i = 0; i < countUpElmsTotal; i++) {
			if (!allCountUpElms[i].visible) {
				elmTop = $(allCountUpElms[i].elm).offset().top;
				elmBottom = elmTop + 43;
				if (screenTop < elmTop && screenBottom > elmBottom) {
					showNumber(allCountUpElms[i]);
				};
			};
		};
	};

	testForVisibility();

	$(document).on('scroll', function() {
		testForVisibility();
	})

	// Initialize techtube Lazy Load plug-in if needed
	if ($('.lazyYT').length > 0) {
		$('.lazyYT').lazyYT();
	}
})