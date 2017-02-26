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
        
		$('#main-menu > ul').show();
        $('.project-description').stick_in_parent({ offset_top: 60 });
        
        
    } else if (windowSize == 'small') {
        
		$('#main-menu > ul').hide();
        $('.open-menu').removeClass('rotate');
        
    }
    
    if (windowSize == 'medium' || windowSize == 'small') {
        
        $('.project-description').trigger('sticky_kit:detach');        
        
    }
    
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
    
    setInterval(function() { checkBrowserSize(); }, 100);
	
    // Mobile menu
    
    $('.open-menu').on('click', function() {

       var $this = $(this);
		
		$('#main-menu > ul').slideToggle(600);
		$this.toggleClass('rotate');

    })
    
    $('h1, li a').on('click', function() {

        if (windowSize === 'small') {

            $('#main-menu > ul').slideUp(600);
            $('.open-menu').removeClass('rotate');

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
    
/*
    $('img').unveil(800, function(){
        
        $(this).load(function() {
            
            this.style.opacity = 1;
            
        })
        
    })
*/

    
})