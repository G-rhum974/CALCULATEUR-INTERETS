
//Fonction appelée quand on clique sur "Calculer"
function calculerInterets() {

  //On récupère les valeurs des champs 
  let montant = new Number(document.getElementById("montant").value);
  let taux = new Number(document.getElementById("taux").value);
  let duree = new Number(document.getElementById("duree").value);

  //On vérifie que toutes les valeurs sont valides
  if (Number.isNaN(montant.valueOf()) || Number.isNaN(taux.valueOf()) || Number.isNaN(duree.valueOf())){
    document.getElementById("resultat").innerText = " Merci de remplir tous les champs correctment.";
    return;
  }
  //calcul des intérêts (formule : intérêt = capital * taux * durée / 100)
  let interets = montant.valueOf() * (taux.valueOf() / 100) * duree.valueOf();
  
//Calcul total final (capital + intérêts)
let total = montant.valueOf() + interets;

//Affichage du résultat, arrondi à 2 décimales 
document.getElementById("resultat").innerText =
` Intérêts : ${interets.toFixed(2)} €\n Total final : ${total.toFixed(2)} €`;
}
