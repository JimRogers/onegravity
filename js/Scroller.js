
/*!
 * Smooth Scroller*/

var x=0, 
    y=0,
    rate=0,
    maxspeed=10;
var backdrop = $('.backdrop');

$('.direction', backdrop).mousemove(function(e){
    var $this = $(this);
    var left = $this.is('.left');
    
    if (left){
        var w = $this.width();
        rate = (w - e.pageX - $(this).offset().left + 1)/w;
    }
    else{
        var w = $this.width();
        rate = -(e.pageX - $(this).offset().left + 1)/w;
    }
});

backdrop.hover(
    function(){
        var scroller = setInterval( moveBackdrop, 30 );
        $(this).data('scroller', scroller);
    },
    function(){
        var scroller = $(this).data('scroller');
        clearInterval( scroller );
    }
);   

function moveBackdrop(){
    x += maxspeed * rate;
    var newpos = x+'px '+y+'px';
    backdrop.css('background-position',newpos);
}
