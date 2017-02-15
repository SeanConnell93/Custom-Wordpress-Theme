window.addEventListener("load", function(){
    $(".work-description a").wrap('<div class="work-link"></div>');
});


// on ready 
$( function(){
    
    $(".nav ul li, .nav ul li a").delegate( this, "click", function(){
        setTimeout(function(){
            navListFadeIn();
        }, 500);
        $("body").toggleClass("body-overflow-hide");
    });
    
    
    $(".nav-btn").delegate(this, "click", function(){
        navListFadeIn();
        $("body").toggleClass("body-overflow-hide");
    });

    scrollClick();
    back_top_top();
    work_item_fade_in();
    resizeBody();
    
    
    // lazy loading images
    $("img.lazy").lazyload({
        effect : "fadeIn",
        threshold : 600
    });
    
    $(".back-page a").on("click", function(event){
        event.preventDefault();
       window.history.back(1); 
    });

});

// end ready event



var nav_open = $(".nav ul li").hasClass("opacity-out");

function navListFadeIn(){
    
    if (nav_open) {
        $(".nav ul li, .nav ul img").each(function(i){
            setTimeout(function(){
                $(".nav ul li, .nav ul img").eq(i).toggleClass("opacity-out");
            }, 200 * (i+1));
        });
        
    } else {
        $(".nav ul li, .nav ul img").toggleClass("opacity-out");
    }

    $(".nav-btn .top").toggleClass("clicked_top");
    $(".nav-btn .mid").toggleClass("clicked_mid");
    $(".nav-btn .bottom").toggleClass("clicked_bottom");
    $(".nav").toggleClass("hide");
}

                        


//Stops viewport jumping/glitching when url is hidden and showen on moblie
var body = $("body");

$(window).on("resize", function(){
    
    if ($(document).width() >= 500) {
        resizeBody();   
    }
});
        
function resizeBody() {
    body.height($(window).height()) + 60;
}


//scoll to clicked tap

function scrollClick() {
    $("#skill, #project").on("click", function(e) {
        e.preventDefault();
        var buttonID = this.id +"Sect";

        $("body").animate({
            scrollTop: $("#" + buttonID).offset().top
        }, 1200, "easeInOutExpo");
    });         
}

// Project pop ups and about me pop ups

$(document).scroll(function(){
    
    work_item_fade_in();
    
    var wSrcoll = $(this).scrollTop();
    var skillSect = $("#skillSect").length;
    
    if (skillSect) {
        if(wSrcoll > $("#skillSect").offset().top - ($(window).height() / 1.25)){
        $(".items g").each(function(i){
            setTimeout(function(){
               $(".items g").eq(i).removeClass("scale");
                $("#pc g g path").eq(i).removeClass("scale-word");
            }, 80 * (i+1));
        });
    }   
    }
    
    if(wSrcoll > $(".footer").offset().top - ($(window).height() / 1.25)) {
        $(".back-top").removeClass("back-top-hide");
    }

    var nav_open = $(".nav ul li").hasClass("opacity-out");
    if (nav_open) {
        nav_icon();
    }

});


var scroll_position = 0;
function nav_icon(){
    var cur_scroll_position = $(this).scrollTop();
    if (cur_scroll_position > scroll_position) {
        $(".nav-btn").addClass("nav-btn-hide");
    } else {
        $(".nav-btn").removeClass("nav-btn-hide");
    }
    scroll_position = cur_scroll_position;
}


function back_top_top() {
    $(".back-top").on("click", function(){
        $("body").animate({scrollTop: $("html").offset().top
        }, 800, "easeInOutExpo"); 
    });
}


function work_item_fade_in() {
    $(".work-item").each(function(){
        var $top_of_obj = $(this).offset().top - $(this).outerHeight() / 10;
        var $bottom_of_win = $(window).scrollTop() + $(window).height();

        if($bottom_of_win > $top_of_obj){
            $(this).addClass("slide-in-work-item");
        }
    }); 
}





// scroll easing

$.extend( $.easing, {
//	easeInExpo: function (x, t, b, c, d) {
//		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
//	},
//	easeOutExpo: function (x, t, b, c, d) {
//		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
//	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}
});




