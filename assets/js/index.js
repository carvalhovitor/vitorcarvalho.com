"use strict";

const site = {
  init : (callback) => {

    // SLOW SCROLLING
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        let href = this.getAttribute('href');
        
        if (href == '#about') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          return;
        }

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });

        if (history.pushState) {
          history.pushState(null, null, href);
        }
        else {
          location.hash = href;
        }
      });
    });

    // HEADER MARGIN UPDATE

    let main = document.getElementsByTagName('main')[0],
        header = document.getElementsByTagName('header')[0],
        headerHeight = 0;

    function setMargin() {
      if (window.innerWidth < 767) {
        main.style.marginTop = 0;

        return;
      }

      let newHeaderHeight = 0;
      
      headerHeight = header.clientHeight + parseInt(getComputedStyle(header).marginBottom);

      if (headerHeight != newHeaderHeight) {
        newHeaderHeight = headerHeight;

        main.style.marginTop = newHeaderHeight + 'px';
      }
    }

    // GO TO TOP ARROW

    let arrow = document.getElementById('arrow');

    window.onscroll = function() {
      if (window.pageYOffset > headerHeight) {
        arrow.style.display = 'block';
      }
      else {
        arrow.style.display = 'none';
      }
    }

    setMargin();

    window.onresize = function() {
      setMargin();
    };

    callback();
  }
}

// DOCUMENT READY

document.addEventListener('DOMContentLoaded', () => {
  site.init(function() {
    document.body.style.opacity = 1;
  });
});