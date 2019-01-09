var width = window.innerWidth;
var height = window.innerHeight;




$('.border_Nav').hide();
$('.Header_Div_Logo_Black_Scroll').hide();
$('.Header_Div_Logo_White_Scroll').hide();


window.addEventListener('scroll', function (e) {
    e.preventDefault();
    let lastPosition = window.scrollY;

    if(lastPosition > 50){
        $('.Header_Div_Logo_Main').fadeOut();
        $('.Header_Text_Animation').fadeOut();
        $('.border_Nav').fadeIn();
        if(lastPosition<height-15){
            $('.Header_Div_Logo_Black_Scroll').fadeIn();
        }
    }else if (lastPosition < 50){
        $('.Header_Div_Logo_Main').fadeIn();
        $('.Header_Text_Animation').fadeIn();
        $('.border_Nav').fadeOut();
        $('.Header_Div_Logo_Black_Scroll').fadeOut();
    }
    if(lastPosition>height-10){
        $('.Header_Div_Logo_Black_Scroll').hide();
        $('.Header_Div_Logo_White_Scroll').fadeIn();
    }else{
        $('.Header_Div_Logo_White_Scroll').fadeOut();
    }
});

var heightHeader = screen.height;

$('.Main_Div_Menu').css({
    position: 'absolute',
    top: heightHeader,            
    zIndex: '3'

});


var fixmeTop = $('.Main_Div_Img_For_Mabile').offset().top;

$(window).scroll(function() {                  

    var currentScroll = $(window).scrollTop();
    var heightMenu = $("#Menu_pizzas").height();

    if (currentScroll >= fixmeTop) {          
        	
        $( "#Main_Div_Img_Rm" ).removeClass( "Main_Div_Img_For_Mabile" );
        
        $('#Main_Div_Img_Rm').css({                      
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '-1'

        });        
        $('#footer').css({                      
            position: "absolute",
            top: heightMenu

        });
 
    } else {                                   
        $('#Main_Div_Img_Rm').css({                      
            position: 'relative',
            top: '0',
            left: '0',
            zIndex: '2'
        });
        $("#Main_Div_Img_Rm").addClass('Main_Div_Img_For_Mabile');
    }
    
});