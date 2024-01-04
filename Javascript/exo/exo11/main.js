/* # Exercice 11

  - On dispose d'une feuille de papier d'épaisseur 0.1 mm.
  - Combien de fois doit-on la plier au minimum pour que l'épaisseur dépasse 400m ?
  - Écrire un programme pour résoudre ce problème.
  - Une fois fini, aborder le problème à l'inverse.
//   - Combien de fois doit-on déplier une feuille de 400m au minimum pour que l'épaisseur dépasse 0.1mm. */


function plierFeuille(epaisseurInitiale, epaisseurVoulue) {
    let nombrePlis = 0;

    while (epaisseurInitiale < epaisseurVoulue) {
        epaisseurInitiale *= 2;
        nombrePlis++;
    }

    return nombrePlis;
}

function deplierFeuille(epaisseurInitiale, epaisseurVoulue) {
    let nombreDeplis = 0;

    while (epaisseurInitiale > epaisseurVoulue) {
        epaisseurInitiale /= 2;
        nombreDeplis++;
    }

    return nombreDeplis;
}

const epaisseurFeuille = 0.0001; 
const epaisseurVouluePlier = 400; 

const plisNecessaires = plierFeuille(epaisseurFeuille, epaisseurVouluePlier);
console.log(`Pour dépasser ${epaisseurVouluePlier} m, il faut plier la feuille ${plisNecessaires} fois.`);

const epaisseurFeuilleDepliee = 400; 
const epaisseurVoulueDeplier = 0.0001; 

const deplisNecessaires = deplierFeuille(epaisseurFeuilleDepliee, epaisseurVoulueDeplier);
console.log(`Pour dépasser ${epaisseurVoulueDeplier} m, il faut déplier la feuille ${deplisNecessaires} fois.`);
