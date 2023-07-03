import { validateInput } from "./validateInput.js";
import { displayErrors } from "./displayErrors.js";

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

nextButtons.forEach((button, index) => {
	button.addEventListener('click', (event) => {
		let invalidInputs = validateInput(cards[index]);

		if (invalidInputs.length === 0) {
			showNextCard();
		} else {
			event.preventDefault();
			displayErrors(invalidInputs);
		}
	});
});

prevButtons.forEach(button => {
	button.addEventListener('click', showPrevCard);
});

cards[currentCard].style.display = 'block';