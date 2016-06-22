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