$(function() {

    $('#menu a').on('click', function() {
        $('#menu-toggle').trigger('click');
    })

    // $('#menu-toggle').on('click', function() {
    //     $('html, body').toggleClass('lock');
    // })
    
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
    
})