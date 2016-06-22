var paper = Raphael("stage06", 800, 300);
for(var i=0; i<10; i++)
    paper.circle(40 + i * 70, 100, 30)
        .attr('fill' , 'rwhite-hsl(' + i/10 + ',1,0.5)');