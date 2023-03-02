/* ---> count variables <--- */
const entryField = document.querySelector(".main__input");
const calcButton = document.querySelector(".calculate__btn");

/* ----> change colors <---- */
const header = document.querySelector(".header");
const input = document.querySelector(".main__input");
const mainBtn = document.querySelector(".calculate__btn");
const tableItems = document.querySelectorAll(".main__table-list-item");
const footer = document.querySelector(".footer");

function wordsCount(str) {
	let arr = new Array();
	for (let el of str.split(" ")) {
		if (Number.isInteger(Number(el)) && el.match(/\W/g)) {
			continue;
		} else {
			arr.push(el);
		}
	}
	document.getElementById("words").innerText = arr.length;
}

function charactersCount(str) {
	let characters = str.split(" ").join("");
	document.getElementById("characters").innerText = characters.length;
}

function spacesCount(str) {
	let result = str.match(/\s/g);
	result === null
		? (document.getElementById("spaces").innerText = 0)
		: (document.getElementById("spaces").innerText = result.length);
}

function numbersCount(str) {
	let result = str.match(/(\d+)/g);
	result === null
		? (document.getElementById("numbers").innerText = 0)
		: (document.getElementById("numbers").innerText = result.length);
}

function symbolsCount(str) {
	let result = str.match(/\W/g);

	let symbArr = [];
	for (let el of result) {
		if (el === " ") {
			continue;
		} else {
			symbArr.push(el);
		}
	}
	symbArr.length === 0
		? (document.getElementById("symbols").innerText = 0)
		: (document.getElementById("symbols").innerText = symbArr.length);
}

const sentenceCount = (str) => {
	let result = str.split(/[.?!...]+/);
	let sentenceArr = [];
	for (let el of result) {
		if (el === "") {
			continue;
		} else {
			sentenceArr.push(el);
		}
	}
	sentenceArr.length === 0
		? (document.getElementById("sentences").innerText = 0)
		: (document.getElementById("sentences").innerText = sentenceArr.length);
};

// ! --- overview the results ---

function appCount() {
	let entry = entryField.value;

	wordsCount(entry);
	charactersCount(entry);
	spacesCount(entry);
	numbersCount(entry);
	symbolsCount(entry);
	sentenceCount(entry);
	setColor();
}

const setColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	header.style.backgroundColor = `#${randomColor}`;
	input.style.borderColor = `#${randomColor}`;
	mainBtn.style.borderColor = `#${randomColor}`;
	footer.style.backgroundColor = `#${randomColor}`;
	tableItems.forEach((el) => {
		el.style.backgroundColor = `#${randomColor}`;
	});
};

calcButton.addEventListener("click", appCount);
