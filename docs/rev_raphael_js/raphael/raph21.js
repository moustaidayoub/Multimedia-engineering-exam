var paper = Raphael("stage21", 300, 400);

var chemin = paper.path("M57,357c131,15,34.608-126.382,34.804-167.691 117.423,116.701,175,127s49-76,10-71");
chemin.attr('stroke-dasharray', '. ');
var longueur = chemin.getTotalLength();
var step = 10;
var curvPosition = 0;
var c1 = paper.circle(0,0,8).attr({fill : 'rwhite-black'});
setInterval(function(){
    if(curvPosition>longueur)
        curvPosition = 0;
    var position = chemin.getPointAtLength(curvPosition);
    c1.attr({cx: position.x, cy : position.y});
    curvPosition += step;
}, 50);