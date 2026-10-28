//  Ce sont les prix unitaires
const prixUnitaireAttiekePoisson = 1500;
const prixUnitaireRizPoulet = 2000;
const prixUnitaireAllocoOeuf = 1000;

// Ce sont les données de la commande

const client = "Awa";
const codePlat = 3; // On vas utiliser 1 pour Attiéké-poisson, 2 pour Riz-poulet, 3 pour Alloco-œuf
const quantiteTexte = "4";              // C'est le reçue sous forme de texte
const quantite = Number(quantiteTexte); // C'est la conversion en nombre
const montantVerse = 4000;

// C'est la Fonction qui calcule le montant total
function calculerTotal(prixUnitaire, quantite) {
  return prixUnitaire * quantite;
}

// Déterminer le plat et son prix unitaire

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

// Calcul du total
const montantTotal = calculerTotal(prixUnitaire, quantite);

// Récapitulatif
console.log(`===== Récapitulatif =====`);
console.log(`Client : ${client}`);

for (let i = 1; i <= quantite; i++) {
  console.log(`Portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
}

console.log(`Total à payer : ${montantTotal} FCFA`);
console.log(`Montant versé : ${montantVerse} FCFA`);

if (montantVerse >= montantTotal) {
  const monnaie = montantVerse - montantTotal;
  console.log(`Monnaie à rendre : ${monnaie} FCFA`);
} else {
  const manque = montantTotal - montantVerse;
  console.log(`Montant insuffisant : il manque ${manque} FCFA`);
}

// Demander à l'utilisateur des informations

rl.question("Veuillez entrer votre nom : ", (nom) => {
  console.log(`Bonjour, ${nom}!`);
});
rl.question("Veuillez entrer le code du plat (1, 2 ou 3) : ", (code) => { console.log(`Vous avez choisi le plat avec le code : ${code}`); }); 
rl.question("Veuillez entrer la quantité désirée : ", (quantite) => { console.log(`Vous avez choisi une quantité de : ${quantite}`); });
rl.question("Veuillez entrer le montant versé : ", (montant) => { console.log(`Vous avez versé : ${montant} FCFA`); });
rl.close();