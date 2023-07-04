export function validateInput(currentCard) {
	const inputs = currentCard.querySelectorAll('input');
	let invalidInputs = [];
	inputs.forEach(input => {
		if (!input.checkValidity()) {
			let validationErrorElement = input.parentNode.querySelector('.validation-error');
			invalidInputs.push(validationErrorElement);
		}
	});
	return invalidInputs;
};
