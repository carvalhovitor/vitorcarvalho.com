"use strict";

const site = {
  init : (callback) => {
    const main = document.getElementsByTagName('main')[0],
          header = document.getElementsByTagName('header')[0];

    let headerHeight = header.clientHeight;

    function adjustElements() {
      if (window.innerWidth <= 767) {
        if (parseInt(main.style.marginTop) > 0) {
          main.style.marginTop = 0;
        }

        if (header.classList.contains('hidden')) {
          header.classList.remove('hidden');
        }
      }
      else {
        main.style.marginTop = header.clientHeight + 'px';

        header.classList.toggle('hidden', window.pageYOffset > headerHeight);
      }
    }

    window.onresize = function() {
      adjustElements();
    };

    window.onscroll = function() {
      if (window.innerWidth > 767) {
        header.classList.toggle('hidden', window.pageYOffset > headerHeight);
      }
    }

    // Initial states

    adjustElements();

    // Callback

    callback();
  }
}

// DOCUMENT READY

window.onload = function() {
  site.init(function() {
    document.body.classList.add('loaded');
  });

  if (window.location.hash) {
    let el = document.querySelectorAll(window.location.hash)[0];

    window.scrollTo({
      top: el.offsetTop
    })
  }
};