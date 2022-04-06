"use strict";

document.querySelector("button").addEventListener('click', sumInput);

function sumInput(event) {
	event.preventDefault();
	let arr = [];
	let newValue;
	let res = 0;
	let i = 0;
	while (i < 1) {
		newValue = +prompt("Введите число");
		if (newValue == null || newValue == "" || isNaN(newValue)) {
			i++;
			for (let e of arr) {
				res = res + e;
			} 
			arr.sort((a, b) => a - b);
			console.log(arr);
		} else if (isFinite(newValue)) {
			arr.push(newValue);
			continue;
		}
	}
	document.querySelector(".result").innerHTML = (`Массив: <br>${arr} <br>Сумма: ${res}`);
	return res;
}