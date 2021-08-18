"use strict";

const main = document.getElementsByTagName('main')[0],
      header = document.getElementsByTagName('header')[0];

const site = {
  init : (callback) => {

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
        if (header.clientHeight != headerHeight || parseInt(getComputedStyle(main).marginTop) == 0) {
          headerHeight = header.clientHeight;
          
          main.style.marginTop = header.clientHeight + 'px';
        }

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

    // This is to avoid horizontal scrolling when clicking on hash anchor

    const scrolled = document.querySelector('body'),
          anchors = document.querySelectorAll("a[href^='#']");

    anchors.forEach(a => {
      a.onclick = function(e) {
        e.preventDefault();

        let href = a.getAttribute('href').slice(1),
            target = document.getElementById(href),
            top = target ? target.offsetTop : 0;

        window.location.hash = href;

        window.scrollTo({
          left: 0,
          top: top
        })
      };
    });

    // Loop through links add add/remove a header class

    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //   anchor.addEventListener('click', function(e) {	
    //     e.preventDefault();

    //     if (this.id === 'arrow') {
    //       header.classList.remove('hidden');
    //     }
    //     else {
    //       if (!header.classList.contains('hidden')) {
    //         header.classList.add('hidden');
    //       }
    //     }

    //     window.location.hash = this.getAttribute('href');
    //   })
    // })

    // Initial states

    adjustElements();

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
    // document.body.style.transition = 'opacity 500ms';
    
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 500);
  });

  if (window.location.hash) {
    let el = document.querySelectorAll(window.location.hash)[0];

    window.scrollTo({
      left: 0,
      top: el.offsetTop
    })
  }
};