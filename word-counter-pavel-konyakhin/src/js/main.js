const entryField = document.querySelector(".main__input");
const calcButton = document.querySelector(".calculate__btn");

function wordsCount(str) {
	let arr = str.split(" ");
	document.getElementById("words").innerText = arr.length;
}

function lettersCount(str) {
	let letters = str.split(" ").join("");
	document.getElementById("letters").innerText = letters.length;
}

function spacesCount(str) {
	document.getElementById("spaces").innerText = str
		.split("")
		.filter((el) => el === " ").length;
}

function numbersCount(str) {
	document.getElementById("numbers").innerText = str.match(/(\d)/g).length;
}

function symbolsCount(str) {
	document.getElementById("symbols").innerText = str
		.split(" ")
		.join("")
		.match(/\W/g).length;
}

// ! --- final count ---
function appCount() {
	let entry = entryField.value;

	wordsCount(entry);
	lettersCount(entry);
	spacesCount(entry);
	numbersCount(entry);
	symbolsCount(entry);
}

calcButton.addEventListener("click", appCount);
