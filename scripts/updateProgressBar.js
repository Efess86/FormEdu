export function updateProgressBar(progress) {
	const progressBarFill = document.querySelector('.progress-bar-fill');
	progressBarFill.style.width = progress + '%';
}