var paper = Raphael("stage12", 360, 400);
// Original
paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-width': 2});

var rect1 = paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-width': 2});

rect1.attr({stroke: 'red'}).transform('r45');
rect1.attr({stroke: 'green'}).transform('t20,160');
rect1.attr({stroke: 'blue'}).transform('s1,2');
// Toutes les transformations précédentes sont ignorées
rect1.attr({stroke: 'cyan'})
    .transform('r45t20,160s1,2');