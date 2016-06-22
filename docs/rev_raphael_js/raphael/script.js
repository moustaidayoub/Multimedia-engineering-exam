/**
 * Created by aziz on 12/05/14.
 */
//var scripts = {};

var preventRepeat = function(id) {
    return  document.querySelector('#' + id + ' svg') != null;
}

Reveal.addEventListener('script01', function () {
    if(preventRepeat('stage01')) return;
    var paper = Raphael("stage01", 200, 400);
    var rect1 = paper.rect(50, 50, 100, 60, 20)
        .attr('fill', '#F99');
});
Reveal.addEventListener('script02', function () {
    if(preventRepeat('stage02')) return;
    var paper = Raphael("stage02", 800, 200);
    for (var i = 0; i < 10; i++)
         var rect1 = paper.circle(20 + i * 50, 100, 20)
             .attr('fill', '#F99');
});

Reveal.addEventListener('script03', function () {
    if(preventRepeat('stage03')) return;
    var paper = Raphael("stage03", 800, 300);
    var text = paper.text(300, 100, 'lorem ipsum\ndolor')
        .attr('font-size', 48);
});

Reveal.addEventListener('script04', function () {
    if(preventRepeat('stage04')) return;
    var paper = Raphael("stage04", 800, 300);
    var path = paper.path("M268.731,122.893l-45.605-35.444V28.814h-32.582v33.311l-47.547-36.959l-125.729,97.72l19.769,26.373 l13.547-10.528v121.104h184.836V138.738l13.54,10.521L268.731,122.893z M217.321,241.404h-41.737v-70.031h-65.161v70.031H68.686  V127.003l74.318-57.778l74.317,57.778V241.404z")
        .attr('fill', 'black');
});

Reveal.addEventListener('script05', function () {
    if(preventRepeat('stage05')) return;
    var paper = Raphael("stage05", 800, 300);
    for (var i = 0; i < 10; i++)
        paper.circle(40 + i * 70, 100, 30)
            .attr('fill', 'hsl(' + i / 10 + ',1,0.5)');
});

Reveal.addEventListener('script06', function () {
    if(preventRepeat('stage06')) return;
    var paper = Raphael("stage06", 800, 300);
    for (var i = 0; i < 10; i++)
        paper.circle(40 + i * 70, 100, 30)
            .attr('fill', 'rwhite-hsl(' + i / 10 + ',1,0.5)');
});

Reveal.addEventListener('script07', function () {
    if(preventRepeat('stage07')) return;
    var paper = Raphael("stage07", 200, 400);
    paper.rect(50,20,100,40)
        .attr('fill', 'gray');
    paper.rect(50,70,100,40)
        .attr('fill', 'rgb(250,200,100)');
    paper.rect(50,120,100,40)
        .attr('fill', 'hsba(0.4,0.9,0.9,1)');
    paper.rect(50,170,100,40)
        .attr('fill', '0-red-yellow-green-blue-violet');
    paper.rect(50,220,100,40)
        .attr('fill', '0-#F00-#FF0-#0F0-#0FF-#00F');
    paper.rect(50,270,100,40)
        .attr('fill', '0-white-black');
    paper.ellipse(100,340,50,20)
        .attr('fill', 'rred-yellow');
});

Reveal.addEventListener('script08', function () {
    if(preventRepeat('stage08')) return;
    var paper = Raphael("stage08", 200, 400);
    paper.path("M30,60 h140").attr({'stroke-width': 6});
    paper.path("M30,100 h140")
        .attr({'stroke-width': 6,
            'stroke': 'orange'});
    paper.path("M30,140 h140")
        .attr({'stroke-width': 6,
            'stroke-dasharray': '-'});
    paper.path("M30,180 h140")
        .attr({'stroke-width': 6,
            'stroke-dasharray': '- .'});
    paper.path("M30,220 h140")
        .attr({'stroke-width': 6,
            'stroke-dasharray': '.'});
    paper.path("M30,260 h140")
        .attr({ 'stroke-width': 10,
            'stroke-linecap': 'round'});
});

Reveal.addEventListener('script09', function () {
    if(preventRepeat('stage09')) return;
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
});

Reveal.addEventListener('script10', function () {
    if(preventRepeat('stage10')) return;
    var paper = Raphael("stage10", 350, 400);
// Original
    paper.rect(100, 40, 100, 60, 10)
        .attr({stroke: 'gray', 'stroke-width': 2});

    var rect1 = paper.rect(100, 40, 100, 60, 10)
        .attr({stroke: 'gray', 'stroke-width': 2});

    rect1.attr({stroke: 'green'})
        .transform('T20,160');
    rect1.attr({stroke: 'red'})
        .transform('R45');
    rect1.attr({stroke: 'blue'})
        .transform('S1,2');
// Toutes les transformations précédentes sont ignorées
    rect1.attr({stroke: 'cyan', 'stroke-width': 2})
        .transform('R45T20,160S1,2');
});
Reveal.addEventListener('script11', function () {
    if(preventRepeat('stage11')) return;
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
});

Reveal.addEventListener('script12', function () {
    if(preventRepeat('stage12')) return;
    var paper = Raphael("stage12", 350, 400);
// Original
    paper.rect(150, 40, 100, 60, 10)
        .attr({stroke: 'gray', 'stroke-width': 2});

    var rect1 = paper.rect(150, 40, 100, 60, 10)
        .attr({stroke: 'gray', 'stroke-width': 2});

    rect1.attr({stroke: 'red'})
        .transform('r45');
    rect1.attr({stroke: 'green'})
        .transform('t20,160');
    rect1.attr({stroke: 'blue'})
        .transform('s1,2');
// Toutes les transformations précédentes sont ignorées
    rect1.attr({stroke: 'cyan'})
        .transform('r45t20,160s1,2');
});

Reveal.addEventListener('script13', function () {
    if(preventRepeat('stage13')) return;
    var paper = Raphael("stage13", 360, 400);
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

});

Reveal.addEventListener('script14', function () {
    if(preventRepeat('stage14')) return;
    var paper = Raphael("stage14", 300, 400);
// Création du groupe
    var group = paper.set(
        paper.rect(50, 100, 200, 60),
        paper.circle(150, 130, 50)
    );
// modification des attributs
    group.attr({
        'stroke-width': 4,
        stroke: 'gray',
        fill: '90-black-#CCC'
    })
// rotation du groupe
    group.transform('R45');
});

Reveal.addEventListener('script141', function () {
    if(preventRepeat('stage141')) return;
    var paper = Raphael("stage141", 300, 400);
    // Gestionnaire d'événement
    function enAvant(){
        this.toFront();
    }
    // Création de objets superposés
   paper.rect(30, 100, 160, 160, 20)
       .attr({fill: 'green',cursor : 'pointer'})
       .click(enAvant);  // Association du handler
   paper.rect(110, 180, 160, 160, 20)
        .attr({fill: 'orange', cursor: 'pointer'})
       .click(enAvant);  // Association du handler

});

Reveal.addEventListener('script15', function () {
    if(preventRepeat('stage15')) return;
    var paper = Raphael("stage15", 300, 400);
    var rect1 = paper.circle(100, 100, 50)
        .attr({
            fill: 'rwhite-black',
            stroke: 'gray',
            'stroke-width': 10,
            cursor: 'pointer'
        }).mouseover(function (event) {
            this.attr({
                r: 70
            });
        }).mouseout(function (event) {
            this.attr({
                r: 50
            });
        });
});

Reveal.addEventListener('script16', function () {
    if(preventRepeat('stage16')) return;
    var paper = Raphael("stage16", 220, 400);
    var rect1 = paper.circle(100, 50, 30)
        .attr({
            fill: 'rwhite-black',
            stroke: 'gray',
            'stroke-width': 8
        }).animate({    // Attributs à animer
            cy: 300
        },
        2e3,            // durée de l'animation
        'bounce',       // Fondu de l'animation
        function () {     // callback
            // ce qu'on veut faire à la fin de lanimation
        });
});

Reveal.addEventListener('script17', function () {
    if(preventRepeat('stage17')) return;
    var paper = Raphael("stage17", 220, 400);
    var rect1 = paper.circle(100, 50, 30)
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
                    setTimeout(this.attr('cy', 50), 1e3);
                });
        });
});

Reveal.addEventListener('script18', function () {
    if(preventRepeat('stage18')) return;
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
            fill: 'rwhite-black',
            stroke: 'gray',
            'stroke-width': 6,
            cursor: 'pointer'
        }).click(function () {
            this.animate(anim);
        });
});

Reveal.addEventListener('script19', function () {
    if(preventRepeat('stage19')) return;
    var paper = Raphael("stage19", 300, 400);
    var style = {
        fill: 'rwhite-black',  stroke: 'gray',
        'stroke-width': 6, cursor: 'pointer'
    };
    var anim = Raphael.animation({
        '10%' : {fill : 'rblack-white', easing : '<>'},
        '20%' : {fill : 'rwhite-black', easing : '<>'},
        '40%' : {transform : 't0,250s1.5,0.75', easing: 'bounce'},
        '100%' : {transform : 's1,1', easing: '<>'}
    }, 3e3);
    var circ1 = paper.circle(100, 50, 20).attr(style);
    circ1.animate(anim.repeat(Infinity));
    var circ2 = paper.circle(200, 50, 20).attr(style);
    circ2.animate(anim.repeat(Infinity));
});

Reveal.addEventListener('script20', function () {
    if(preventRepeat('stage20')) return;
    var paper = Raphael("stage20", 300, 400);
    var c1 = paper.circle(150,150, 60)
        .attr({fill : 'red'});
    var r1 = paper.rect(30, 180, 120, 170)
        .attr({fill : 'green'});
    var g = paper.set(c1, r1);
    var bbox = g.getBBox();

    paper.rect(bbox.x, bbox.y, bbox.width, bbox.height)
        .attr({'stroke-dasharray': '- '});
});

Reveal.addEventListener('script21', function () {
    if(preventRepeat('stage21')) return;
    var paper = Raphael("stage21", 300, 400);

    var chemin = paper.path("M57,357c131,15,34.608-126.382,34.804-167.691 117.423,116.701,175,127s49-76,10-71");
    chemin.attr('stroke-dasharray', '. ');
    var longueur = chemin.getTotalLength();
    var step = 10;
    var curvPosition = 0;
    var c1 = paper.circle(0,0,8).attr({fill : 'rwhite-black'});
    setInterval(function(){
        if(curvPosition>longueur)
            curvPosition = 0;
        var position = chemin.getPointAtLength(curvPosition);
        c1.attr({cx: position.x, cy : position.y});
        curvPosition += step;
    }, 70);

});

Reveal.addEventListener('script22', function () {
    if(preventRepeat('stage22')) return;
    var paper = Raphael("stage22", 300, 400);
    var paperWidth = paper.width;
    var paperHeight = paper.height;
    var svg = document.querySelector('#stage22 svg');
    // Attacher un handler pour le click
    svg.addEventListener('click', zoomer);
    function zoomer(event){
        if(event.shiftKey){
            paperWidth *= 2; paperHeight *= 2;
        }else{
            paperWidth /= 2; paperHeight /= 2;
        }
       paper.setViewBox(0,0, paperWidth, paperHeight);
    }

    var c1 = paper.circle(150,150, 60)
        .attr({fill : 'red'});
    var r1 = paper.rect(30, 180, 120, 170)
        .attr({fill : 'green'});


});