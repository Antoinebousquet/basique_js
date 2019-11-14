// 2.4.1. Codes la vie
function codage(stringMolecule) {
	let newStringMolecule = stringMolecule.match(/.{1,3}/g);
	console.log(newStringMolecule);
	var result = ""
	for(let index in newStringMolecule) {
		if(newStringMolecule[index] === "UCU" || newStringMolecule[index] === "UCC" || newStringMolecule[index] === "UCA" || newStringMolecule[index] === "UCG" || newStringMolecule[index] === "AGU" || newStringMolecule[index] === "AGC") {
			var result = `${result}-Sérine`;
		}
		else if(newStringMolecule[index] === "CCU" || newStringMolecule[index] === "CCC" || newStringMolecule[index] === "CCA" || newStringMolecule[index] === "CCG") {
			var result = `${result}-Proline`;
		}
		else if(newStringMolecule[index] === "UUA" || newStringMolecule[index] === "UUG") {
			var result = `${result}-Leucine`;
		}
		else if(newStringMolecule[index] === "UUU" || newStringMolecule[index] === "UUC") {
			var result = `${result}-Phénylalanine`;
		}
		else if(newStringMolecule[index] === "CGU" || newStringMolecule[index] === "CGC" || newStringMolecule[index] === "CGA" || newStringMolecule[index] === "CGG" || newStringMolecule[index] === "AGG" || newStringMolecule[index] === "AGA") {
			var result = `${result}-Arginine`;
		}
		else{
			var result = `${result}-Tyrosine`;
		};
	};
	console.log(result.substring(1))
};

codage("CCGUCGUUGCGCUACAGC");
codage("CCUCGCCGGUACUUCUCG");
