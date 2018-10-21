"use strict";

let dictionary = [
	"apple", "word", "coffee", "green" , "red", "blue", "awesome", "amazing", "function", "artist", "singer", "black",
	"five", "for", "about", "what", "restaurant", "silence", "hotel", "luxury", "woman", "cat", "dog", "sister", "mother",
	"wallet", "pharmacy", "mountain", "box", "road", "interesting", "capital", "hope", "pain"
];

let shuffle = (array) => {
	array.forEach((value, index) => {
		// случайное число от 0 до индекса последнего элемента
		let rand = Math.floor(Math.random() * array.length);
		// вместо текущего элемента ставим случайны
		array[index] = array[rand];
		// а вместо случайного - текущий
		array[rand] = value;
	});
};

shuffle(dictionary);

window.addEventListener("load", function () {
    const limitQuestions = 5;
    let currentQuestion = 1;

    let answerContainer = document.querySelector("#answer");
    let letters = document.querySelector("#letters");
    let currentQuestionElem = document.querySelector("#current_question");
    let totalQuestionsElem = document.querySelector("#total_questions");

    currentQuestionElem.innerHTML = currentQuestion;
    totalQuestionsElem.innerHTML = limitQuestions;

    // функция для показа слова, разбитого на буквы в кнопках
    let displayCurrentQuestion = () => {
    	let word = dictionary[currentQuestion];
    	let wordArr = word.split("");
        shuffle(wordArr);

        for (let letter of wordArr) {
        	let btn = document.createElement("button");
        	btn.innerHTML = letter;
        	btn.className = "btn btn-primary btn-sm mr-1";

            letters.appendChild(btn);
		}
	};

    displayCurrentQuestion();

});



