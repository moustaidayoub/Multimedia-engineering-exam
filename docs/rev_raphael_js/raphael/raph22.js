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
var c1 = paper.circle(150,150, 60).attr({fill : 'red'});
var r1 = paper.rect(30, 180, 120, 170).attr({fill : 'green'});