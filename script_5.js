// 2.3.2. Bibliothécaire 

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
for(let index in books) {
	if(books[index].rented <= 0) {
		var i = 1;
		break;
	} else {
		var i = 2;
	};
};

if(i == 1) {
	console.log("Non, les livres n'ont pas tous été empruntés au moins une fois");
};

if(i == 2) {
	console.log("Oui, les livres ont été empruntés au moins une fois");
};

// Quel est livre le plus emprunté ?
console.log("Le livre le plus emprunté est :");

books.sort(function(a, b){
    if(a.rented < b.rented) { return 1; }
    if(a.rented > b.rented) { return -1; }
    return 0;
});

console.log(books.slice(0,1));

// Quel est le livre le moins emprunté ?
console.log("Le livre le moins emprunté est :");

books.sort(function(a, b){
    if(a.rented < b.rented) { return -1; }
    if(a.rented > b.rented) { return 1; }
    return 0;
});

console.log(books.slice(0,1));

// Trouve le livre avec l'ID: 873495
for(let index in books) {
	if(books[index].id === 873495) {
		console.log(`Voici le livre avec l'ID 873495 : ${books[index].title}`);
	}; 
};

// Supprime le livre avec l'ID: 133712
for(let index in books) {
	if (books[index].id === 873495) {
	  delete books[index];
	}
};

console.log(books);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
console.log("Voici la liste des livres triés par ordre alphabétique sans celui avec l'ID 133712 :");

books.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
});

console.log(books);


















