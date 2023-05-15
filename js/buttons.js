
const modal = document.querySelector('.window');
const nameData = document.querySelector('.user-data.name');
const surnameData = document.querySelector('.user-data.surname');
const nameInput = document.querySelector('input[name="Name"]');
const surnameInput = document.querySelector('input[name="Surname"]');
const startContainer = document.querySelector('.start-container');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');
const hachSpans = document.querySelectorAll('.hach');

startContainer.addEventListener('click', function(event) {
	if (event.target.matches('.start')) {
	modal.classList.add('active');
	startContainer.style.display = 'none';
}
});

hachSpans.forEach(function(span) {
	span.addEventListener('click', closeModal);
});

cancelButton.addEventListener('click', closeModal);

submitButton.addEventListener('click', function(event) {
	event.preventDefault();
	nameData.textContent = nameInput.value;
	surnameData.textContent = surnameInput.value;
	closeModal();
});

function closeModal() {
	modal.classList.remove('active');
	startContainer.style.display = 'block';
}