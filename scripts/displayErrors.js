export function displayErrors(invalidInputs) {
	invalidInputs.forEach(input => {
		input.classList.add('error-active');
		setTimeout(() => {
			input.classList.remove('error-active');
		}, 5000);
	});
}
