/* Генератор дразнилок */


let randomBodyParts = ["голова", "лицо", "нос", "тело"];
let randomAbjectives = ["толстая", "маленькая", "сморщенная", "потная", "гигантская"];
let randomWords = ["выдра", "корова", "мышь", "тушка", "собачка"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAbjective = randomAbjectives[Math.floor(Math.random() * randomAbjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let scrapper = ["У тебя", randomBodyPart, "словно", randomAbjective, randomWord].join(" ");
alert(scrapper);