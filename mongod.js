/****************************************************
 * TP MONGODB – NO SQL
 * ISG Sousse – 3ème LIG
 * Chapitre 6 : NoSQL avec MongoDB
 ****************************************************/

/* ===============================
   1️⃣ AFFICHER LES BASES EXISTANTES
   =============================== */
show dbs;

/* ===============================
   2️⃣ CREER / UTILISER UNE BASE
   =============================== */
use madatabase;      // crée la base si elle n'existe pas
db;                  // afficher la base courante

/* ===============================
   3️⃣ CREER UNE COLLECTION
   =============================== */
db.createCollection("client");

/* ===============================
   4️⃣ AFFICHER LES COLLECTIONS
   =============================== */
show collections;

/* ===============================
   5️⃣ INSERER UN DOCUMENT (insert)
   =============================== */
db.client.insert({
  nom: "Salah",
  age: 35
});

/* ===============================
   6️⃣ INSERER PLUSIEURS DOCUMENTS
   =============================== */
db.client.insertMany(
  [
    { nom: "Meriem", age: 24 },
    { nom: "Mhamed", age: 55 },
    { nom: "Sofien", age: 40 },
    { nom: "Bessem", age: 33 }
  ],
  { ordered: false } // continue même s'il y a une erreur
);

/* ===============================
   7️⃣ AFFICHER TOUS LES DOCUMENTS
   =============================== */
db.client.find();

/* ===============================
   8️⃣ AFFICHAGE FORMATE (pretty)
   =============================== */
db.client.find().pretty();

/* ===============================
   9️⃣ RECHERCHE AVEC CRITERES
   =============================== */
db.client.find({ nom: "Salah" });
db.client.find({ nom: "Salah", age: 35 });

/* ===============================
   🔟 AFFICHER UN SEUL DOCUMENT
   =============================== */
db.client.findOne();

/* ===============================
   1️⃣1️⃣ COMPTER LES DOCUMENTS
   =============================== */
db.client.find().count();
db.client.find({ age: 40 }).count();

/* ===============================
   1️⃣2️⃣ FILTRAGE AVEC OPERATEURS
   =============================== */

// age > 30
db.client.find({ age: { $gt: 30 } });

// age < 40
db.client.find({ age: { $lt: 40 } });

// age >= 30
db.client.find({ age: { $gte: 30 } });

// age différent de 35
db.client.find({ age: { $ne: 35 } });

// age dans une liste
db.client.find({ age: { $in: [24, 33, 40] } });

// OR logique
db.client.find({
  $or: [
    { age: { $gt: 50 } },
    { age: { $lt: 25 } }
  ]
});

// AND logique
db.client.find({
  $and: [
    { age: { $gt: 30 } },
    { age: { $lt: 50 } }
  ]
});

/* ===============================
   1️⃣3️⃣ MODIFIER DES DONNEES
   =============================== */

// Modifier un champ (updateOne)
db.client.updateOne(
  { nom: "Salah" },
  { $set: { tel: "23456789" } }
);

// Incrémenter une valeur
db.client.updateOne(
  { nom: "Salah" },
  { $inc: { age: 1 } }
);

// Renommer un champ
db.client.updateOne(
  { nom: "Salah" },
  { $rename: { tel: "telephone" } }
);

// Supprimer un champ
db.client.updateOne(
  { nom: "Salah" },
  { $unset: { telephone: "" } }
);

/* ===============================
   1️⃣4️⃣ SUPPRIMER DES DONNEES
   =============================== */

// Supprimer un document
db.client.deleteOne({ nom: "Bessem" });

// Supprimer plusieurs documents
db.client.deleteMany({ age: { $lt: 30 } });

/* ===============================
   1️⃣5️⃣ SUPPRIMER UNE COLLECTION
   =============================== */
db.client.drop();

/* ===============================
   1️⃣6️⃣ SUPPRIMER LA BASE
   =============================== */
db.dropDatabase();

/****************************************************
 * FIN DU TP MONGODB
 ****************************************************/
