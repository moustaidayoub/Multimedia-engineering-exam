var paper = Raphael("stage15", 300, 400);
var circ1 = paper.circle(100,100,50)
    .attr({
        fill : 'rwhite-black',
        stroke : 'gray',
        'stroke-width' : 10,
        cursor : 'pointer'
    }).mouseover(function(event){
        this.attr({
            r : 70
        });
    }).mouseout(function(event){
        this.attr({
            r : 50
        });
    });