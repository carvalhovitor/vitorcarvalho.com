
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
        
        //$mainMenu.css('height', 'auto');
        $('.project-description').stick_in_parent({ offset_top: 60 });
        
        
    } else if (windowSize == 'small') {
        
        //$mainMenu.css('height', 0);
        $('.open-menu').removeClass('selected');
        
    }
    
    if (windowSize == 'medium' || windowSize == 'small') {
        
        $('.project-description').trigger('sticky_kit:detach');        
        
    }
    
/*    if (windowSize == 'small' && window.location.pathname == "/about.htm") {
        
        $('main').load('index.htm' + ' section', function() {
            
            // Change later to function
            $('img').unveil(800, function(){
                $(this).load(function() {
                    this.style.opacity = 1;
                })
            })
            
        })
        
        console.log('running');
        
    } else {
        
        
        
    }*/
    
}

function randomize() {

    var date = new Date(),
        day = String(date.getDate()),
        month = String(date.getMonth());

    Math.seedrandom(day + month);

    var list = document.getElementById('project-list'),
        projects = document.getElementById('projects');

    for (var i = list.children.length; i >= 0; i--) {

        var random = Math.random() * i | 0;

        list.appendChild(list.children[random]);
        if (projects) { projects.appendChild(projects.children[random]) }

    }
    
    $('body').show();
    
}

$(function() {
    
    setInterval('checkBrowserSize()', 100);
    
    // Mobile menu
    
    $('.open-menu').on('click', function() {

       var navHeight = $('#main-menu').height(),
           $this = $(this);
		
		$('#main-menu > ul').slideToggle(600);
		$this.toggleClass('selected');
/*
        if (navHeight === 0) {
			
			$('body, html').css('height', '100%');
			$mainMenu.slideDown(500);
			$('html, body').css('overflow', 'hidden');
			$this.addClass('selected');
            
        } else {
            
           $mainMenu.animate({ 'height': 0 }, 500);
			$('html, body').css('overflow', 'auto');
           $this.removeClass('selected');
            
        }*/

    })
    
    $('h1, li a').on('click', function() {

        if (windowSize === 'small') {

            $mainMenu.slideUp(600);
            $('.open-menu').removeClass('selected');

        }

    })
    

    
    // Slow scrolling
    
    $('a[href^=#]').on('click', function(){
        
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
            var $linkElem = $(this),
                target = $(this.hash);
            
            target = target.length ? target : $('body');
            
            if (target.length) {
                
                $('body').animate({ scrollTop: target.offset().top }, 1000, function() {
                    
                    window.location.hash = $linkElem.attr('href')
                    
                })
                
                
            }
            
        return false
            
        }
        
    })
    
    randomize();
    
        // Unveils images
    
    $('img').unveil(800, function(){
        
        $(this).load(function() {
            
            this.style.opacity = 1;
            
        })
        
    })

    
})