/* SLOW SCROLLING */
    
function scrollSlowly() {
    
    $('target[id]').attr('tabindex', '-1');
    
    $('a[href*=#]:not([href=#])').on('click', function(){
        
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
             var $linkElem = $(this);
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                
                $('html,body').animate({
                    
                    scrollTop: target.offset().top
                    
                }, 1000, function() {
                    
                    window.location.hash = $linkElem.attr('href').substring(1);
                    
                })
                
            return false;
                
            }
            
        }
        
    })
        
}
    
/* MOBILE MENU */

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
    
    if (windowSize != newWindowSize) {
        
        windowSize = newWindowSize;
        loadResponsiveMenu();
        
    }

};

function loadResponsiveMenu(){

    if (windowSize == 'large' || windowSize == 'medium') {
        
        $('#main-menu').css('height','auto');
        $('.project-description').stick_in_parent({ offset_top: 60 });
        
    } else if (windowSize == 'small') {
        
        $('#main-menu').css('height','0px');
        $('a.mobile-menu').removeClass('selected');
        
    }
    
    if (windowSize == 'medium' || windowSize == 'small') {
        
        $('.project-description').trigger('sticky_kit:detach');        
        
    }
    
};


function mobileMenu(){

    $('a.mobile-menu').on('click', function (){

       var navHeight = $('#main-menu').height();
       var newNavHeight = $('#main-menu div').height();

        if (navHeight == 0) {
            
           $('#main-menu').animate({ 'height': newNavHeight + 'px' }, 500);
           $(this).addClass('selected');
            
        } else {
            
           $('#main-menu').animate({ 'height': '0' }, 500);
           $(this).removeClass('selected');
            
        }

        $('h1, li a').on('click', function (){

            if (windowSize == 'small') {
                
                $('#main-menu').animate({'height':'0px'}, 500);
                $('body').removeClass('lock');
                $('a.mobile-menu').removeClass('selected');
                
            }

        })

    })
    
}


/* ONLOAD */

function imgLoaded(img) {
    
    var $img = $(img); 
    $img.parent().addClass('loaded');
    
}
    
    
/* UNVEIL */
    
function unveilImages(){
    
    $("img").unveil(800, function(){
        
        $(this).load(function(){
            
            this.style.opacity = 1;
            
        })
        
    });
    
};


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



      

$(document).ready(function(){
    
    scrollSlowly();
    mobileMenu();
    checkBrowserSize();
    setInterval('checkBrowserSize()', 100);
    unveilImages();
    
});