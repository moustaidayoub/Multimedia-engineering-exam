var paper = Raphael("stage09", 360, 400);
paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-dasharray': '-'});

paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'red', 'stroke-width': 2})
    .transform('R45');
paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'green', 'stroke-width': 2})
    .transform('T20,160');
paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'blue', 'stroke-width': 2})
    .transform('S1,2');
paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'cyan', 'stroke-width': 2})
    .transform('R45T20,160S1,2');