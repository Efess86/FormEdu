export function validateInput() {
	let valid = true;
	const inputs = document.querySelectorAll('input');
	inputs.forEach(input => {
		if (!input.checkValidity()) {
			input.classList.add(' error-active');
			valid = false;
			setTimeout(() => {
				input.classList.remove('error-active');
			}, 5000);
		}
	});

	return valid;
}
