


$(document).ready(function(){



    var GT = $('#GT')

    
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 250) {
            
            GT.css('bottom', '20px')
        } else {
            
            GT.css('display', 'block')
            GT.css('bottom', '-50px')
            
        }
    })
    GT.on('click', function () {
        $('body,html').animate({
            
            scrollTop: 0
            
        }, 400)
    })





});