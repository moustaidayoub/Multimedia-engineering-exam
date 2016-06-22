var paper = Raphael("stage14", 300, 400);
// Création du groupe
var group = paper.set(
    paper.rect(50, 100, 200, 60),
    paper.circle(150, 130, 50)
);
// modification des attributs
group.attr({
    'stroke-width' : 2,
    stroke : '90-#CCC-black',
    fill : '90-black-#CCC'
});
// rotation du groupe
group.transform('R45');