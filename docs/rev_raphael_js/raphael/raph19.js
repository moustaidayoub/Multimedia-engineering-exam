var paper = Raphael("stage19", 300, 400);
var style = {
    fill: 'rwhite-black',  stroke: 'gray',
    'stroke-width': 6, cursor: 'pointer'
};
var anim = Raphael.animation({
    '10%' : {fill : 'rblack-white', easing : '<>'},
    '20%' : {fill : 'rwhite-black', easing : '<>'},
    '40%' : {transform : 't0,250s1.5,0.75', easing: 'bounce'},
    '100%' : {transform : 's1,1', easing: '<>'}
}, 3e3);
var circ1 = paper.circle(100, 50, 20).attr(style);
circ1.animate(anim.repeat(Infinity));
var circ2 = paper.circle(200, 50, 20).attr(style);
circ2.animate(anim.repeat(Infinity));