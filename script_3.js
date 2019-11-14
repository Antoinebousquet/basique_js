// // 2.2.2 Pyramide de Mario

answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(value) {
	var count = 1; 
	while (count <= value) {
		let espace = " ";
		let hashtag = "#";
		console.log(espace.repeat(value - count) + hashtag.repeat(count));
		count += 1;                     
	};
};

pyramid(answer);

