$(document).ready(function(){//code to run on the first loading of page
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop); //find the scroll position in pixel a browser
        // in console 
            if((positiontop>10) && (positiontop< 213)){
                $('#card-one').addClass('animated bounceInLeft');
                $('#card-two').addClass('animated zoomInDown');
                $('#card-three').addClass('animated flipInX');
            }
            if((positiontop>274) && (positiontop<333)){
                $('#textanimate').addClass('animated slideInUp');//use # tag for 
                //id and .tag for class
                
            }
            if((positiontop>553) && (positiontop< 633)){
                $('#card2-one').addClass('animated bounceInLeft');
                $('#card2-two').addClass('animated zoomInDown');
                $('#card2-three').addClass('animated flipInX');
            }

    });
    

});
//also $() instead of jquery. window is a global object, we can
//write document also.
