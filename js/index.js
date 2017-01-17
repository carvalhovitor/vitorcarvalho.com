var windowSize = '',
    $mainMenu = $('#main-menu');

function checkBrowserSize(){ 
    
    var windowWidth = $(window).width();
    
    if (windowWidth > 1024) {
        
        newWindowSize = 'large';
        
    } else if (windowWidth > 767 && windowWidth <= 1024) {
        
        newWindowSize = 'medium';
        
    } else {
        
        newWindowSize = 'small';
        
    }
    
    if (windowSize != newWindowSize) {
        
        windowSize = newWindowSize;
        loadResponsiveMenu();
        
    }

}

function loadResponsiveMenu() {

    if (windowSize == 'large' || windowSize == 'medium') {
        
        $mainMenu.css('height', 'auto');
        $('.project-description').stick_in_parent({ offset_top: 60 });
        
    } else if (windowSize == 'small') {
        
        $mainMenu.css('height', 0);
        $('.open-menu').removeClass('selected');
        
    }
    
    if (windowSize == 'medium' || windowSize == 'small') {
        
        $('.project-description').trigger('sticky_kit:detach');        
        
    }
    
}    
        
/* DYNAMIC CONTENT LOAD */

/*var $main = $('main');
    
$('#main-menu li:first-child a, #main-menu li:last-child a').on('click', function () {

    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    if (!($(this).attr('href') == filename)) {
        _link = $(this).attr('href');
        history.pushState(null, null, _link);
        loadContent(_link);
    }

    return false;
    
});


function loadContent(href){

    $main.find('section').fadeOut(200, function(){
        
        $main.hide().load(href + ' section', function(){
            
            $main.fadeIn(500);
            unveilImages();
            
        }); 
    });
    
};*/

//$(window).bind('popstate', function(){
//    //_link = location.pathname.replace(/^.*[\\\/]/, '');
//    loadContent(_link);
//});


/*function loadContent(link) {
    
    
    
}


$('#main-menu').find('ul > li:last-child a, ul').on('click', function() {
    
    var href = $(this).attr('href').substring(1);
    
    history.pushState(null, null, href);
    
    $('main > section').hide();
    $('.' + href).show();
    
    return false;
    
})

$(window).bind("popstate", function() {
    
    link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
    
})*/
      

$(function() {
    
    setInterval('checkBrowserSize()', 100);
    
    // Mobile menu
    
    $('.open-menu').on('click', function() {

       var navHeight = $('#main-menu').height(),
           newNavHeight = $('#main-menu div').height(),
           $this = $(this);

        if (navHeight === 0) {
            
           $mainMenu.animate({ 'height': newNavHeight + 'px' }, 500);
           $this.addClass('selected');
            
        } else {
            
           $mainMenu.animate({ 'height': 0 }, 500);
           $this.removeClass('selected');
            
        }

    })
    
    $('h1, li a').on('click', function() {

        if (windowSize === 'small') {

            $mainMenu.animate({ 'height': 0 }, 500);
            $('.open-menu').removeClass('selected');

        }

    })
    
    // Unveils images
    
    $('img').unveil(800, function(){
        
        $(this).load(function() {
            
            this.style.opacity = 1;
            
        })
        
    })
    
    // Slow scrolling
    
    $('a[href*=#]:not([href=#])').on('click', function(){
        
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
            var $linkElem = $(this),
                target = $(this.hash);
            
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                
                $('html, body').animate({ scrollTop: target.offset().top }, 1000, function() {
                    
                    window.location.hash = $linkElem.attr('href')
                    
                })
                
            return false
                
            }
            
        }
        
    })
    
});