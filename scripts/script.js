const cards = document.querySelectorAll('.card');
const nextButtons = document.querySelectorAll('.nextBtn');
const prevButtons = document.querySelectorAll('.prevBtn');
let currentCard = 0;

function showNextCard() {
	cards[currentCard].style.display = 'none';
	currentCard++;
	if (currentCard >= cards.length) {
		alert('Form ended')
	} else {
		cards[currentCard].style.display = 'block';
	}
}
function showPrevCard() {
	cards[currentCard].style.display = 'none';

	currentCard--;

	if (currentCard < 0) {
		alert('Form start')
	} else {

		cards[currentCard].style.display = 'block';
	}
}


nextButtons.forEach(button => {
	button.addEventListener('click', showNextCard);
});
prevButtons.forEach(button => {
	button.addEventListener('click', showPrevCard);
});
cards[currentCard].style.display = 'block';