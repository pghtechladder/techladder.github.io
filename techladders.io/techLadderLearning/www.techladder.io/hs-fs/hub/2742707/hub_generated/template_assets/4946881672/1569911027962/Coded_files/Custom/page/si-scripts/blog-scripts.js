$(document).ready(function() {
	// Handle scrolling of subscribe anchor link
	$('#subscribe-scroll-link').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#subscribe-form').offset().top - 100
		}, 500);
	});

	// Handle sticky behavior of blog social share
	if ($('#blog-post-begin').length != 0) {
		var blogPost = $('#blog-post-begin');
		var isSticky = false;
		var stickySection = $('#sticky-share');

		var makeSticky = function() {
			stickySection.css('position', 'fixed');
			stickySection.css('top', '100px');
			stickySection.addClass('fixed-position');
			isSticky = true;
		}

		var fixToTop = function() {
			stickySection.css('position', 'absolute');
			stickySection.css('top', '0');
			stickySection.removeClass('fixed-position');
			isSticky = false;
		}

		var fixToBottom = function(blogPostEnd, stickySectionHeight, blogPostBegin) {
			stickySection.css('position', 'absolute');
			stickySection.css('top', (blogPostEnd - stickySectionHeight - blogPostBegin).toString() + 'px');
			stickySection.removeClass('fixed-position');
			isSticky = false;
		}

		var controlSticky = function() {
			if (stickySection.css('display').search('flex') === -1 ) {
				var stickySectionHeight = stickySection.outerHeight(true);
				var blogPostBegin = blogPost.offset().top;
				var blogPostEnd = $('#subscribe-form').offset().top - 50;
				var userHeight = $(window).scrollTop();
				if (userHeight > (blogPostBegin - 100) && userHeight < (blogPostEnd - stickySectionHeight - 100)) {
					makeSticky();
				} else if (userHeight >= (blogPostEnd - stickySectionHeight - 100)) {
					fixToBottom(blogPostEnd, stickySectionHeight, blogPostBegin);
				} else if (userHeight < (blogPostBegin - 100)) {
					fixToTop();
				}
			}
		}

		$(window).on('scroll', function() {
			controlSticky();
		})

		// Get rid of any inline styles for blog social sharing when user goes below 660px
		var subscribeAnchorLink = $('.subscribe-anchor-link');

		$(window).on('resize', function() {
			if (parseInt(subscribeAnchorLink.css('paddingBottom')) === 0) {
				stickySection.removeAttr('style').removeClass('fixed-position').addClass('static-position');
				isSticky = false;
			} else if (stickySection.hasClass('static-position')) {
				controlSticky();
			}
		})
	}
});

window.onload = function() {
	// Site-wide button styling
	var buttons = $('.button');
	var buttonsCount = buttons.length;
	for (var i = 0; i < buttonsCount; i++) {
		if ($(buttons[i]).width() > 280) {
			$(buttons[i]).addClass('wide-button');
		};
	};

	// Form Manipulation
	if ($('#blog-post-begin').length != 0) {
		var manipulateForm = function() {
			// Add class to div, for styling 
			$('input:required').parent().addClass('required-input-holder');
			$('textarea:required').parent().addClass('required-input-holder');
			$('.hs_cos_wrapper_type_blog_comments input[type="submit"]').wrap('<div class="blog-comment__submit-wrapper">')
			clearInterval(formCheck);
		}

		var checkForForm = function() {
			return ($('.hs_cos_wrapper_type_blog_comments input[type="submit"]').length > 0);
		}

		var formCheck = setInterval(function() {
			if (checkForForm()) {
				manipulateForm();
			}
		}, 500)
	}
}