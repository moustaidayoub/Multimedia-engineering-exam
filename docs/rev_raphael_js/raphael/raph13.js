var paper = Raphael("stage13", 350, 400);
// Original
paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-width': 2});
var rect1 = paper.rect(100, 40, 100, 60, 10)
    .attr({stroke: 'gray', 'stroke-width': 2});
rect1.attr({stroke: 'green'}).transform('t20,100');
// ajouter après
rect1.attr({stroke: 'red'}).transform('...r45');
// ajouter avant
rect1.attr({stroke: 'blue'}).transform('s1,2...');
// On pourrait aussi envelopper 'r30...s2,2'
