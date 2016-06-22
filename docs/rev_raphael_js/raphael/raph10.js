var paper = Raphael("stage10", 360, 400);
// Original
paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-width': 2});

var rect1 = paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-width': 2});

rect1.attr({stroke: 'green'}).transform('T20,160');
rect1.attr({stroke: 'red'}).transform('R45');
rect1.attr({stroke: 'blue'}).transform('S1,2');
// Toutes les transformations précédentes sont ignorées
rect1.attr({stroke: 'cyan', 'stroke-width': 2})
    .transform('R45T20,160S1,2');