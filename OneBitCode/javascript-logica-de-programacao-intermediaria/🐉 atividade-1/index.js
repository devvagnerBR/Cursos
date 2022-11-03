console.log("Olá Mundo 🐉🐦❤️");
class Spacechip {
	constructor(name, crewQuantity) {
		this.name = name;
		this.crewQuantity = crewQuantity;
		this.isHitched = false;
		this.entranceDoorsOpen = false;
	}

	hitch() {
		this.isHitched = true;
		this.entranceDoorsOpen = true;
	}
}

const showMenu = () => {
	let choseOption;
	while (choseOption != "1" && choseOption != "2" && choseOption != "3") {
		choseOption = prompt(
			"O que deseja fazer?\n" +
				"1 - Engatar Nave\n" +
				"2 - Imprimir Naves\n" +
				"3 - Sair do programa"
		);
	}
	return choseOption;
};

const createSpaceship = () => {
	let spaceshipName = prompt("Informe o nome da nave");
	let crewQuantity = prompt("Informe a quantidade de tripulantes");
	let spacechip = new Spacechip(spaceshipName, crewQuantity);
	return spacechip;
};

const printSpaceshiptlist = (spacechips) => {
	let spaceshipList = "";
	spacechips.forEach((spacechip, index) => {
		spaceshipList +=
			index +
			1 +
			"- " +
			spacechip.name +
			" (" +
			spacechip.crewQuantity +
			" tripulantes)\n";
	});
	alert(spaceshipList);
};
let hitchedSpaceships = [];
let choseOption;
while (choseOption != "3") {
	choseOption = showMenu();
	switch (choseOption) {
		case "1":
			let spaceshiptToAdd = createSpaceship();
			spaceshiptToAdd.hitch();
			hitchedSpaceships.push(spaceshiptToAdd);
			break;
		case "2":
			printSpaceshiptlist(hitchedSpaceships);
			break;
		case "3":
			alert("Saindo...");
			break;
		default:
			alert("Digite uma opção válida!");
	}
}
