import { validateInput } from "./validateInput.js";
import { displayErrors } from "./displayErrors.js";
import { updateProgressBar } from "./updateProgressBar.js";

const cards = document.querySelectorAll('.card');
const nextButtons = document.querySelectorAll('.nextBtn');
const prevButtons = document.querySelectorAll('.prevBtn');
const eraseAllBtn = document.querySelector('.eraseAllData');
const eraseCurrentBtn = document.querySelector('.eraseData');

let currentCard = 0;

updateProgressBar((1 / cards.length) * 100); // initialize first card progress bar

function showNextCard() {
	cards[currentCard].style.display = 'none';
	currentCard++;
	if (currentCard >= cards.length) {
		alert('Form ended')
	} else {
		cards[currentCard].style.display = 'block';
	};
	const progress = ((currentCard + 1) / cards.length) * 100;
	updateProgressBar(progress);
};

function showPrevCard() {
	cards[currentCard].style.display = 'none';

	currentCard--;

	if (currentCard < 0) {
		alert('Form start')
	} else {
		cards[currentCard].style.display = 'block';
	};
	const progress = ((currentCard + 1) / cards.length) * 100;
	updateProgressBar(progress);
}

eraseCurrentBtn.addEventListener('click', () => {
	const inputs = Array.from(document.querySelectorAll('input')); // return array not nodeList to use every() method
	const allEmpty = inputs.every(input => input.value == '');
	if (!allEmpty) {
		const conf = confirm("Are you sure you want to delete all the data on all the cards?");
		if (conf) {
			inputs.forEach(input => {
				input.value = '';
			});
		} else {
			return;
		}
	} else {
		alert("There's nothing to erase here")
	};
});

eraseAllBtn.addEventListener('click', () => {
	const conf = confirm("Are you sure you want to delete data from current card?");
	if (conf) {
		const inputs = document.querySelectorAll('input');
		inputs.forEach(input => {
			input.value = '';
		})
	} else {
		return;
	};
});

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