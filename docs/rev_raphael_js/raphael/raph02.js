var paper = Raphael("stage02", 800, 300);
for(var i=0; i<10; i++)
    paper.circle(20 + i * 50, 100, 20)
        .attr('fill' , '#F99');
