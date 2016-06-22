var paper = Raphael("stage17", 220, 400);
var circ1 = paper.circle(100, 50, 30)
    .attr({
        fill: 'rwhite-black',
        stroke: 'gray',
        'stroke-width': 8,
        cursor: 'pointer'
    }).click(function () {
        this.animate({    // Attributs à animer
                cy: 300
            },
            2e3,            // durée de l'animation
            'bounce',       // Fondu de l'animation
            function () {     // callback
                setTimeout(circ1.attr('cy', 50), 1e3);
            });
    });