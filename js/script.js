// //SNACK 1
// // Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// // Crea un nuovo array con la lista dei mammiferi.

const animals = [
	{ nome: "leone", famiglia: "felidi", classe: "mammiferi" },
	{ nome: "cane", famiglia: "canidi", classe: "mammiferi" },
	{ nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
];

// let mammiferi = [];

// // animals.forEach((animal) => {
// // 	console.log(animal.classe);
// // 	if (animal.classe === "mammiferi") {
// // 		mammiferi.push(animal);
// // 	}
// // });

// // console.log(mammiferi);

const mammiferi = animals.filter((animal) => {
	console.log(animal.classe);
	return animal.classe === "mammiferi";
});

console.log(mammiferi);

// // // SNACK 2
// // Crea un array di 8 oggetti che rappresentano delle persone:
// // ogni persona ha un nome, un cognome e un'età.
// // Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome
// // e l'indicazione se può guidare, in base all'età.

const persone = [
	{ nome: "Mario", cognome: "Rossi", eta: getRandomNumber(10, 80) },
	{ nome: "Matteo", cognome: "Bianchi", eta: getRandomNumber(10, 80) },
	{ nome: "Luigi", cognome: "Belli", eta: getRandomNumber(10, 80) },
	{ nome: "Alessio", cognome: "Verdi", eta: getRandomNumber(10, 80) },
	{ nome: "Giacomo", cognome: "Lombardi", eta: getRandomNumber(10, 80) },
	{ nome: "Filippo", cognome: "Saviero", eta: getRandomNumber(10, 80) },
	{ nome: "Ettore", cognome: "Marra", eta: getRandomNumber(10, 80) },
	{ nome: "Roberto", cognome: "Rosa", eta: getRandomNumber(10, 80) },
];

// // // let newPersone = [];

// // // persone.forEach((persona) => {
// // // 	console.log(persona);
// // // 	return newPersone.push({
// // // 		...persona,
// // // 		frase: "ciao",
// // // 	});
// // // });
// // // console.log(newPersone);
// // // console.log(persone);

const newPersone = persone.map((persona) => {
	console.log(persona.eta);

	if (persona.eta >= 18 && persona.eta <= 70) {
		return {
			...persona,
			frase: `${persona.nome} ${persona.cognome} può guidare`,
		};
	}

	// IO METTO L'ELSE PERCHé MI TORNA MEGLIO LA LOGICA,
	// MA L'ELSE QUI é IMPLICITO
	else {
		return {
			...persona,
			frase: `${persona.nome} ${persona.cognome} NON può guidare`,
		};
	}
});

// // // const newPersone = persone.map((persona) => {
// // // 	console.log(persona.eta);

// // // 	return persona.eta >= 18 && persona.eta <= 70
// // // 		? `${persona.nome} ${persona.cognome} può guidare`
// // // 		: `${persona.nome} ${persona.cognome} NON può guidare`;
// // // });

// // // const newPersone = persone.map(
// // // 	(persona) =>
// // // 		`${persona.nome} ${persona.cognome} ${
// // // 			persona.eta >= 18 ? "" : " NON"
// // // 		} può guidare`
// // // );

// // const newPersone = persone.map((persona) => {
// // 	const { nome, cognome, eta } = persona;

// // 	`${nome} ${cognome} ${eta >= 18 ? "" : " NON"} può guidare`;
// // });
console.log(newPersone);

// Funzione

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // 'Mario Rossi può guidare',
// // 'Luigi Verdi non può guidare',
// // 'Silvia Neri può guidare',

// // SNACK 3
// // Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano
// // che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
// // Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.

const computer = [
	{
		nome: "Mario",
		marca: "Apple",
		hasWindows: true,
		prezzo: 1000,
		prezzoScontato: 830,
	},
	{
		nome: "Matteo",
		marca: "Asus",
		hasWindows: true,
		prezzo: 1020,
		prezzoScontato: 860,
	},
	{
		nome: "Acer",
		marca: "Acer",
		hasWindows: false,
		prezzo: 900,
		prezzoScontato: 578,
	},
	{
		nome: "HP",
		marca: "HP",
		hasWindows: true,
		prezzo: 600,
		prezzoScontato: 550,
	},
	{
		nome: "Apple",
		marca: "Apple",
		hasWindows: false,
		prezzo: 1000,
		prezzoScontato: 779,
	},
	{
		nome: "HP",
		marca: "HP",
		hasWindows: false,
		prezzo: 1000,
		prezzoScontato: 899,
	},
	{
		nome: "Asus",
		marca: "Asus",
		hasWindows: false,
		prezzo: 1000,
		prezzoScontato: 799,
	},
	{
		nome: "HTP",
		marca: "Lenovo",
		hasWindows: true,
		prezzo: 1000,
		prezzoScontato: 699,
	},
];

let windowsComputer = computer.filter((computer) => {
	return computer.hasWindows === true;
});

// const windowsComputer = computer.filter((computer) => {
// 	const { hasWindows } = computer;
// 	return hasWindows === true;
// });

console.log(windowsComputer);

let differenza = windowsComputer.map((computer) => {
	return computer.prezzo - computer.prezzoScontato;
});

// const differenza = windowsComputer.map((computer) => {
// 	const { prezzo, prezzoScontato } = computer;
// 	return prezzo - prezzoScontato;
// });

// // const newPersone = persone.map((persona) => {
// // 	const { nome, cognome, eta } = persona;

// // 	`${nome} ${cognome} ${eta >= 18 ? "" : " NON"} può guidare`;
// // });

console.log(differenza);

// // CONCATENAZIONE DI FILTER E MAP

// // const windowsComputer = computer
// // 	.filter((computer) => {
// // 		const { hasWindows } = computer;
// // 		return hasWindows === true;
// // 	})
// // 	.map((computer) => {
// // 		const { prezzo, prezzoScontato } = computer;
// // 		return prezzo - prezzoScontato;
// // 	});

// // console.log(windowsComputer);

// // // Funzione

// // function getRandomNumber(min, max) {
// // 	return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// // SNACK PER IL WEEKEND

// // SNACK 1
// // A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array
// // in minuscolo e con l'iniziale maiuscola.
// // Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const nomi = ["pippo", "PLUTO", "Paperino"];

let format = [];
format = nomi.map((nome) => {
	// console.log(nome[0].toUpperCase() + nome.toLowerCase());
	return nome[0].toUpperCase() + nome.toLowerCase().slice(1);
});

console.log(format);

// // let format = [];

// // nomi.forEach((nome) => {
// // 	format.push(nome[0].toUpperCase() + nome.toLowerCase().slice(1));
// // });

// // console.log(format);

// // SNACK 2
// // Un oggetto rappresenta una finestra di un browser e contiene due campi:
// // un array di tab aperte
// // un numero che indica l'indice della tab aperta nell'array:
// // {
// //     "tab": ["Facebook", "GitHub", "Gmail"],
// //     "activeTab": 0
// // }
// // Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// // Nel caso la tab fosse attiva, deve attivare la successiva.

let finestra = {
	tab: ["Facebook", "GitHub", "Gmail"],
	activeTab: 0,
};

// // // console.log(finestra.tab);

let schede = finestra.tab;
let index = finestra.activeTab;

schede.forEach((scheda, index) => {
	// console.log(schede[index]);
	if (schede[index] === "Facebook") {
		schede.shift(schede[index]);
		if (index === 0) {
			index += 1;
		}
	}
});
// // // let tab = [];
// // console.log(schede);
// // console.log(schede[index]);
// // console.log(index);
console.table(finestra);
// // // finestra.forEach((element) => {
// // // 	console.log(element);
// // // });

// // SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
// // A partire da un array di stringhe, crea un secondo array
// // formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// // Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const names = ["pippo", "PLUTO", "Paperino"];

// // let format = [];

// // function capFirstLetter() {

// // }

// // names.forEach((nome) => {
// // 	format.push(nome[0].toUpperCase() + nome.toLowerCase().slice(1));
// // });
// // console.log(format);

// // capFirstLetter(format);
// const parola = ["cIaO", "djijWWWWW"];

// const names = ["pippo", "PLUTO", "Paperino"];

// // const names = ["pippo", "PLUTO", "Paperino"];

// // let maiusc = [];
// // for (var i = 0; i < names.length; i++) {
// // 	maiusc.push(capFirstLetter(names[i]));
// // }

// // const maiusc = names.map((word) => {
// // 	return capFirstLetter(word);
// // 	console.log(word);
// // 	// return capFirstLetter(word[index]);
// // });

const maiusc = names.map((word) => {
	return capLetter(word) + word.toLowerCase().slice(1);
	console.log(word);
	// return capFirstLetter(word[index]);
});

// // names.forEach((nome) => {
// // 	console.log(names.capFirstLetter(nome));
// // });

console.log(maiusc);

// // const format = capFirstLetter(parola);

// // console.log(format);
// // console.log(format);

// // // console.log(maiusc);
// // // funzione

// function capFirstLetter(word) {
// 	return word[0].toUpperCase() + word.toLowerCase().slice(1);
// }

function capLetter(word) {
	return word[0].toUpperCase();
}

// SNACK 4 -> VUE
// Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
// Andiamo a stampare nome cognome e numero dentro una lista.
// Fare in modo poi che i contatti non attivi(attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero.
// Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero

var app = new Vue({
	el: "#app",
	data: {
		rubrica: [
			{
				nome: "Marco",
				cognome: "Lanza",
				numero: 3392321373,
				attivo: true,
			},
			{
				nome: "Luisa",
				cognome: "Gori",
				numero: 3252741274,
				attivo: true,
			},
			{
				nome: "Silvio",
				cognome: "Giani",
				numero: 324993236,
				attivo: false,
			},
			{
				nome: "Ettore",
				cognome: "Galli",
				numero: 324893636,
				attivo: false,
			},
			{
				nome: "Luigi",
				cognome: "De Stefani",
				numero: 3372827346,
				attivo: true,
			},
			{
				nome: "Corrado",
				cognome: "Silvestri",
				numero: 3339348363,
				attivo: false,
			},
		],
	},
	methods: {
		showLastname(index) {
			// console.log(index);
			console.log(this.rubrica[index].cognome);
		},
	},
});
