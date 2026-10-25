// Ce sont Prix unitaires
const prixUnitaireAttiekePoisson = 1500;
const prixUnitaireRizPoulet = 2000;
const prixUnitaireAllocoOeuf = 1000;

// Pour les Données de la commande
const client = "Awa";
const codePlat = 1;
const quantiteTexte = "3";              // reçue sous forme de texte
const quantite = Number(quantiteTexte); // convertie en nombre
const montantVerse = 5000;

// C'est la Fonction qui calcule le montant total
function calculerTotal(prixUnitaire, quantite) {
  return prixUnitaire * quantite;
}

// C'est l'étape pour déterminer le plat et son prix unitaire
let nomPlat;
let prixUnitaire;

if (codePlat === 1) {
  nomPlat = "Attiéké-poisson";
  prixUnitaire = prixUnitaireAttiekePoisson;
} else if (codePlat === 2) {
  nomPlat = "Riz-poulet";
  prixUnitaire = prixUnitaireRizPoulet;
} else if (codePlat === 3) {
  nomPlat = "Alloco-œuf";
  prixUnitaire = prixUnitaireAllocoOeuf;
} else {
  console.log("Code de plat invalide");
}

// Appeler la fonction et récupérer le résultat
const montantTotal = calculerTotal(prixUnitaire, quantite);

// C'est l'étape pour calculer le reste à rendre
const reste = montantVerse - montantTotal;

// Affichage
console.log(`Client : ${client}`);
console.log(`Plat : ${nomPlat} x ${quantite}`);
console.log(`Montant total : ${montantTotal} FCFA`);
console.log(`Montant versé : ${montantVerse} FCFA`);
console.log(`Reste : ${reste} FCFA`);