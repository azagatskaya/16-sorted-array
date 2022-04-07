"use strict";

document.querySelector("button").addEventListener('click', sumInput);

function sumInput() {
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
		}
	}
	document.querySelector(".result").innerHTML = (`Массив: <br>${arr} <br>Сумма: ${res}`);
	// return res;
}

// - 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.
// - 2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от нежелательных значений, таких как false, undefined, пустые строки, ноль, null с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`.

// 3. Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива, длина которого `> 3`.

// -------- Практическое задание 3:
// №1
let techs = ['js', 'css', 'html'];
console.log(techs[0]);

// №2
let diffTypesArr = [0, 1, false, 2, undefined, '', 3, null];
let numbersArr = diffTypesArr.filter((el) => !!(el));
// let numbersArr = diffTypesArr.filter((el) => Number(el) > 0);
console.log(numbersArr);

// №3
let arrOfArrays = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
for (let item of arrOfArrays) {
	if (item.length > 3) { console.log(item) };
}