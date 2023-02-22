document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const entryField = document.querySelector(".main__input");
	const resultField = document.querySelector(".main__table-list");
	const calcButton = document.querySelector(".calculate__btn");
	//   const targetElement = event.target;

	const getTotalLength = () => console.log(entryField.value.length);

	calcButton.addEventListener("click", getTotalLength);
});
