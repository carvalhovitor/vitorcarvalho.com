// SLOW SCROLLING

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

    if ($linkElem[0].hash == '#about') $('html, body').animate({scrollTop: 0}, 1000);

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

// IMAGE NAVIGATION

$('img').on('click', function() {
  var next = $(this).parents('div').next('div'),
      project = $(this).parents('.project'),
      id = project.attr('id'),
      nextId = project.next('.project').attr('id');

  if (window.location.hash != id) {
    history.pushState(null, null, '#' + (next.length == 1 ? nextId : id));
  }

  if (next.length) {
    $('html, body').animate({
      scrollTop: next.offset().top - parseInt(next.css('marginBottom'))
    }, 300);
  }
})


// HEADER MARGIN UPDATE

$(document).ready(function() {
  setMargin();
  $('body').css('opacity', 1);
});

$(window).resize(setMargin);

var $main = $('main'),
    $header = $('header');

function setMargin() {
  var headerHeight = $header.outerHeight(true),
      newHeaderHeight = 0;

  if (headerHeight != newHeaderHeight) {
    newHeaderHeight = headerHeight;

    $main.css('margin-top', newHeaderHeight);
  }
}