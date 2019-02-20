$(function() {

    $('#menu a').on('click', function() {
        $('#menu-toggle').trigger('click');
    })

    $('a[href*="#"]').click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var $linkElem = $(this),
            target = $(this.hash);

        // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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

    // Sticky positioning polyfill

    if (window.outerWidth > 767) {
      stickybits('aside > div', {stickyBitStickyOffset: '1.75rem'});
    }

    if (window.outerWidth > 1024) {
      stickybits('.project-description', {stickyBitStickyOffset: '1.75rem'});
    }

    // 

    $('img').on('click', function() {
      var next = $(this).parents('div').next('div'),
          project = $(this).parents('.project'),
          id = project.attr('id'),
          nextId = project.next('.project').attr('id');

      if (window.location.hash != id) {
        history.pushState(null, null, '#' + (next.length == 1 ? nextId : id));
      }

      $('html, body').animate({
        scrollTop: next.offset().top - parseInt(next.css('marginBottom'))
      }, 300);
    })
})
