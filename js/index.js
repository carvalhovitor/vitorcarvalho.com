var windowSize = '';

function checkBrowserSize(){ 
    var windowWidth = $(window).width();
    
    if (windowWidth > 1024) {
        newWindowSize = 'large';
    } else if (windowWidth > 767 && windowWidth <= 1024) {
        newWindowSize = 'medium';
    } else {
        newWindowSize = 'small';
    }
    
    // If the newWindowSize is different from what the
    // windowSize currently is, then make them equal and
    // call the loadResponsiveMenu function
    if (windowSize != newWindowSize) {
        windowSize = newWindowSize;
        loadResponsiveMenu();
    }
}

function loadResponsiveMenu() {
    if (windowSize == 'large' || windowSize == 'medium') {
		$('#main-menu > ul').show();
        $('.project-description').stick_in_parent({ offset_top: 60 });
    } else if (windowSize == 'small') {
		$('#main-menu > ul').hide();
        $('.open-menu').removeClass('rotate');
    }
    
    if (windowSize == 'medium' || windowSize == 'small') {
        $('.project-description').trigger('sticky_kit:detach');        
    }
}



$(function() {
    
    setInterval(function() { 
        checkBrowserSize();
    }, 100);
	
    // Mobile menu
    
    $('.open-menu').on('click', function() {
       	var $this = $(this);
		$('#main-menu').toggleClass('full-height').find('> ul').slideToggle(600);
		$this.toggleClass('rotate');
    })
    
    $('h1, li a').on('click', function() {
        if (windowSize == 'small') {
			$('#main-menu').removeClass('full-height').find('> ul').slideUp(600);
            $('.open-menu').removeClass('rotate');
        }
    })
    

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var $linkElem = $(this);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            window.location.hash = $linkElem.attr('href')
          });
        }
      }
    });
    
})