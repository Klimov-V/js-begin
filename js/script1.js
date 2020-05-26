(function() {
	'use strict'
	
    let CURRENT_YEAR = 2020;
	
	let COURS_USD_EUR = .93;
	
	let SIZE_OF_FILE = 820;
	let SIZE_OF_GB = 1024;

	// 1

    let userName = prompt("Hello! What is your name?");
	alert(`Nice to meet you ${userName}`);
	
	// 2

	let userBirthYear;

	do {
		userBirthYear = +prompt("In what year you was born?");		
	} while (userBirthYear > 2020 || userBirthYear < 1900 || isNaN(userBirthYear) )

	alert(`You are ${CURRENT_YEAR - userBirthYear} years old.`);
	
	// 3

	let lengthOfSquareSide;

	do {
		lengthOfSquareSide = +prompt("Enter length of a square.");		
	} while (isNaN(lengthOfSquareSide) )

	alert(`The perimeter of the square is ${lengthOfSquareSide * 4}.`);

	// 4

	let rediousOfcircle;

	do {
		rediousOfcircle = +prompt("Enter redious of a circle.");
	} while (isNaN(rediousOfcircle) )

	alert(`The area of the circle is ${(Math.PI * rediousOfcircle * rediousOfcircle).toFixed(2)}.`);

	// 6
	
	let userUsd;
	
	do {
		userUsd = +prompt("Enter value in USD.");
	} while (isNaN(userUsd))

	alert(`It'll be ${(userUsd * COURS_USD_EUR).toFixed(2)} in EUR`);

	// 7
	
	let userFlashDriveMemory;
	
	do {
		userFlashDriveMemory = +prompt("Enter size of your flesh drive in Gb.");
	} while (isNaN(userFlashDriveMemory))

	alert(`You can download ${Math.floor(userFlashDriveMemory * SIZE_OF_GB / SIZE_OF_FILE)} files of 820 Mb on your flash drive.`);
	
	// 8

	let userCash,
		chocolateBarPrise;
	do {
		userCash = +prompt("How much cash do you have?");
	} while (isNaN(userCash))

	do {
		chocolateBarPrise = +prompt("How much for a chocolate bar?");
	} while (isNaN(chocolateBarPrise))

	alert(`You con by ${Math.floor(userCash / chocolateBarPrise)} chocolate bars, and you will have ${(userCash % chocolateBarPrise).toFixed(2)}`);	// toFixed() возвращает строку, преобразовать в число можно было бы, если бы значение писалось в переменную и потом использовалось дальше
	
	// 9

	let userNumber,
		rezultNumber = '';
	
	do {
		userNumber = prompt("Enter number of three didgit")
	} while (isNaN(userNumber))

	console.log(userNumber);
	

	for (let i = 1; i <= userNumber.length; i++) {
		rezultNumber = rezultNumber + Math.floor((userNumber % Math.pow(10, i)) / Math.pow(10, i - 1));
	}
	alert(rezultNumber);

})();