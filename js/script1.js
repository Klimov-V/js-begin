(function() {
	'use strict'
	
    let CURRENT_YEAR = 2020;
	
	let COURS_USD_EUR = .93;
	
	let SIZE_OF_FILE = 820;
	let SIZE_OF_GB = 1024;

    let userName = prompt("Hello! What is your name?");
    alert(`Nice to meet you ${userName}`);

    let userBirthdayYear = prompt("In what year you was born?");
	alert(`You are ${CURRENT_YEAR - userBirthdayYear} years old.`);		// хотел создать отдельную переменную, но не стал, т.к. в данном задании она нигде больше не используется
	
	let lengthOfSquareSide = prompt("Indicate length of a square.");
	alert(`The perimeter of the square is ${lengthOfSquareSide * 4}.`);

	let rediousOfcircle = prompt("Indicate redious of a circle.");
	alert(`The area of the circle is ${(Math.PI * rediousOfcircle * rediousOfcircle).toFixed(3)}.`);
	
	let userUsd = prompt("Indicate value in USD.");
	alert(`It'll be ${userUsd * COURS_USD_EUR} in EUR`);
	
	let userFlashDriveMemory = prompt("Indicate mamory of your flesh drive in Gb.");
	alert(`You can download ${Math.floor(userFlashDriveMemory * SIZE_OF_GB / SIZE_OF_FILE)} files of 820 Mb on your flash drive.`);
	
	let userCash = prompt("How much cash do you have?");
	let chocolateBarPrise = prompt("How much for a chocolate bar?");
	alert(`You con by ${Math.floor(userCash / chocolateBarPrise)} chocolate bars, and you will have ${(userCash % chocolateBarPrise).toFixed(2)}`);	// toFixed() возвращает строку, преобразовать в число можно было бы, если бы значение писалось в переменную и потом использовалось дальше
	
	let userNumber = prompt("Enter number of three didgit");
	let rezultNumber = '';
	for (let i = 1; i <= userNumber.length; i++) {
		rezultNumber = rezultNumber + Math.floor((userNumber % Math.pow(10, i)) / Math.pow(10, i - 1));
	}
	alert(rezultNumber);

})();