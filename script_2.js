// 2.2.1 Calculs rapides
answer = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorial(value) {
	let valeur = 1
	for(let count = 1; count <= value; count++){
  valeur = (valeur * count);
		};
	console.log(valeur);
};

factorial(answer);
