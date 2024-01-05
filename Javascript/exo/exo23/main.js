/*Exercice 23

  - Via l'utilisation d'une variable de type <b>tableau</b>, vous devrez réaliser un logiciel permettant à l'utilisateur d'entrer une <b>série de notes</b>, dont le nombre possible à entrer sera soit (au choix de l'utilisateur) :
    - saisie avant la saisie de notes
    - permissif et pourra aller jusqu'à entrer une note négative qui stoppera la saisie des notes.
  - Une fois la <b>saisie des notes terminée</b>, l'utilisateur aura à sa disposition un <b>affichage</b> lui permettant d'avoir la <b>note max</b>, la <b>note min</b> ainsi que la <b>moyenne</b> (possible de faire un menu pour choisir)
  - Pour les menus à choix, l'utilisation d'un switch est conseillée*/

function saisieFixe() {
    let nombreDeNotes = parseInt(prompt("Combien de notes ?"));
    let notes = [];

    alert("Début de Saisie !");

    for (let i = 0; i < nombreDeNotes; i++) {
        notes.push(saisirNote());
    }

    alert("Fin de Saisie !");
    afficherResultats(notes);
}

function saisirNoteNegatif() {
    let note = parseFloat(prompt("Entrez une note :"));

    while (isNaN(note)) {
        alert("Veuillez entrer un nombre valide.");
        note = parseFloat(prompt("Entrez une note :"));
    }

    return note;
}

function saisieJusquANegative() {
    let notes = [];

    alert("Début de Saisie !");

    while (true) {
        let note = saisirNoteNegatif();

        if (note < 0) {
            break;
        }

        notes.push(note);
    }

    alert("Fin de Saisie !");
    afficherResultats(notes);
}

function saisirNote() {
    let note = parseFloat(prompt("Veuillez entrer une note entre 0 et 20 compris :"));

    while (isNaN(note) || note < 0 || note > 20) {
        note = parseFloat(prompt("ERREUR, veuillez réessayer :"));
    }

    return note;
}

function afficherResultats(notes) {
    if (notes.length === 0) {
        alert("Aucune note à afficher.");
        return;
    }

    let noteMax = Math.max(...notes);
    let noteMin = Math.min(...notes);
    let moyenne = notes.reduce((acc, val) => acc + val, 0) / notes.length;

    console.log("La note maximale est de " + noteMax.toFixed(2) + " / 20");
    console.log("La note minimale est de " + noteMin.toFixed(2) + " / 20");
    console.log("La moyenne est de " + moyenne.toFixed(1) + " / 20");
}

function menu() {
    let choixSaisie = parseInt(prompt("Choisir un mode de saisie:\n1 : Saisie fixe\n2 : Saisie jusqu'à note négative\n\nVotre choix :"));

    switch (choixSaisie) {
        case 1:
            saisieFixe();
            break;
        case 2:
            saisieJusquANegative();
            break;
        default:
            alert("Choix invalide. Veuillez choisir 1 ou 2.");
    }
}

menu();
