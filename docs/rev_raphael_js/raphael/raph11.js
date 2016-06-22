var paper = Raphael("stage11", 360, 400);
paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-dasharray': '-'});

paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'red', 'stroke-width': 2})
    .transform('r45');
paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'green', 'stroke-width': 2})
    .transform('t20,160');
paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'blue', 'stroke-width': 2})
    .transform('s1,2');
paper.rect(150, 40, 100, 60, 10)
    .attr({stroke: 'cyan', 'stroke-width': 2})
    .transform('r45t20,160s1,2');