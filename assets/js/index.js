"use strict";

const main = document.getElementsByTagName('main')[0],
      header = document.getElementsByTagName('header')[0];

const site = {
  init : (callback) => {

    // This is to avoid horizontal scrolling when clicking on hash anchor

    const scrolled = document.querySelector('body'),
          anchors = document.querySelectorAll("a[href^='#']");

    anchors.forEach(a => {
      a.onclick = function(e) {
        e.preventDefault();

        let href = a.getAttribute('href').slice(1),
            target = document.getElementById(href),
            headerHeight = header.offsetHeight,
            top = target ? target.offsetTop + headerHeight + 1 : 0;

        window.location.hash = href;

        window.scrollTo({
          left: 0,
          top: top
        })
      };
    });

    // Callback

    callback();
  }
}

// DOCUMENT READY

window.onload = function() {
  site.init(function() {
    // This is tricky. If you do it with CSS, it does this weird thing where
    // it transitions to opacity 0 (set with CSS) when you reload the page.
    // Adding this with JS, you make sure this doesn't happen.
    main.style.transitionDelay = '500ms'; 
    main.classList.add('transition');
    header.classList.add('transition');
    
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 500);
  })
};