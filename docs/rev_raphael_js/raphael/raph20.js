var paper = Raphael("stage20", 300, 400);
var c1 = paper.circle(150,150, 60)
    .attr({fill : 'red'});
var r1 = paper.rect(30, 180, 120, 170)
    .attr({fill : 'green'});
// Création d'un groupe
var g = paper.set(c1, r1);
// BBox = Bounding Box ~ boite englobante
var bbox = g.getBBox();
// On dessine cette boite
paper.rect(bbox.x, bbox.y, bbox.width, bbox.height)
    .attr({'stroke-dasharray': '- '});