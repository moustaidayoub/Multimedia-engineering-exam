var paper = Raphael("stage16", 220, 400);
var circ1 = paper.circle(100,50,30)
    .attr({
        fill : 'rwhite-black',
        stroke : 'gray',
        'stroke-width' : 8
    }).animate({    // Attributs à animer
        cy : 300
    },
    2e3,            // durée de l'animation
    'bounce',       // Fondu de l'animation
    function(){     // callback
        // ce qu'on veut faire à la fin de lanimation
    });