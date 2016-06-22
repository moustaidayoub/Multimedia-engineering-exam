var paper = Raphael("stage18", 220, 400);
var anim = Raphael.animation({
        cy: 300,    // Attributs à animer
        r: 50
    },
    2e3,            // durée de l'animation
    'bounce',       // Fondu de l'animation
    function () {     // callback
        setTimeout(this.attr({'cy': 50, r : 30}), 1e3);
    });
var rect1 = paper.circle(100, 50, 20)
    .attr({
        fill: 'rwhite-black', stroke: 'gray',
        'stroke-width': 6, cursor: 'pointer'
    }).click(function () {
        this.animate(anim);
    });