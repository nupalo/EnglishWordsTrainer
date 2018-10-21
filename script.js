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

