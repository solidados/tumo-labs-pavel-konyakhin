/* ---> count variables <--- */
const entryField = document.querySelector(".main__input");
const calcButton = document.querySelector(".calculate__btn");

/* ----> change colors <---- */
const header = document.querySelector(".header");
const input = document.querySelector(".main__input");
const mainBtn = document.querySelector(".calculate__btn");
const tableItems = document.querySelectorAll(".main__table-list-item");
const footer = document.querySelector(".footer");

/* ---> set time <---- */
const timeElem = document.querySelector(".time");
const dateElem = document.querySelector(".date");

/* ---> save entry on reload <--- */
const entry = document.querySelector("textarea.main__input");

/* ---> save entry on reload <--- */
function setLocalStorage() {
	localStorage.setItem("entry", entry.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
	if (localStorage.getItem("entry")) {
		entry.value = localStorage.getItem("entry");
	}
}
window.addEventListener("load", getLocalStorage);

/* ---> Main Counter <--- */
function wordsCount(str) {
	let arr = new Array();
	for (let el of str.split(" ")) {
		if (
			Number.isInteger(Number(el)) &&
			el.match(/[^a-zA-Zа-яёЁА-Я0-9\n\t\r\v\f\s]/g)
		) {
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
	// let result = str.match(/\W+/g);
	let result = str.match(/[^a-zA-Zа-яёЁА-Я0-9\n\t\r\v\f\s]/g);

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

/* ---> set time <---- */
function showTime() {
	const date = new Date();
	const options = { hour12: false };
	const currentTime = date.toLocaleTimeString([], options);
	timeElem.textContent = currentTime;

	setTimeout(showTime, 1000);
	function showDate() {
		const date = new Date();
		const options = {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			timeZone: "UTC",
		};
		const currentDate = date.toLocaleDateString("en-GB", options);
		dateElem.textContent = currentDate;
	}
	showDate();
}
showTime();

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
