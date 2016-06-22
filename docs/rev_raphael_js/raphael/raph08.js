var paper = Raphael("stage08", 200, 400);
paper.path("M30,60 h140").attr({'stroke-width': 6});
paper.path("M30,100 h140")
    .attr({'stroke-width': 6,
        'stroke' : 'orange'});
paper.path("M30,140 h140")
    .attr({'stroke-width': 6,
        'stroke-dasharray' : '-'});
paper.path("M30,180 h140")
    .attr({'stroke-width': 6,
        'stroke-dasharray' : '- .'});
paper.path("M30,220 h140")
    .attr({'stroke-width': 6,
        'stroke-dasharray' : '.'});
paper.path("M30,260 h140")
    .attr({ 'stroke-width': 6,
        'stroke-linecap' : 'round'});