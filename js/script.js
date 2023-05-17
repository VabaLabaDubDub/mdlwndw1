
const popup = document.querySelector('.popup');
const popupLinks = document.querySelectorAll('.popup-link');
const popupClose = document.querySelector('.popup__close');
const cancelButton = document.querySelector('.cancel');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const nameParagraph = document.querySelector('.name');
const surnameParagraph = document.querySelector('.surname');
const submitButton = document.querySelector('.submit');

function outsideClickHandler(e) {
if (!popup.contains(e.target)) {
closePopup();
}
}

function openPopup() {
popup.classList.add('open');
document.body.classList.add('lock');
document.body.style.overflow = 'hidden';
}


function closePopup() {
popup.classList.remove('open');
document.body.classList.remove('lock');
document.body.style.overflow = 'auto';
}


popupClose.addEventListener('click', function(e) {
e.preventDefault();
closePopup();
});


for (let i = 0; i < popupLinks.length; i++) {popupLinks[i].addEventListener('click', function(e) {
e.preventDefault();
openPopup();
});
}

cancelButton.addEventListener('click', function(){
	closePopup();
})

popupForm.addEventListener('submit', function(e) {
e.preventDefault();
const nameValue = nameInput.value;
const surnameValue = surnameInput.value;
nameParagraph.textContent = nameValue;
surnameParagraph.textContent = surnameValue;
closePopup();
});

submitButton.addEventListener('click', function(e) {
	e.preventDefault();
	const nameValue = nameInput.value;
	const surnameValue = surnameInput.value;
	nameParagraph.textContent = nameValue;
	surnameParagraph.textContent = surnameValue;
	closePopup();
});


nameInput.addEventListener('keydown', function(e) {
if (e.key === 'Enter') {
e.preventDefault();
popupForm.dispatchEvent(new Event('submit'));
}
});


surnameInput.addEventListener('keydown', function(e) {
if (e.key === 'Enter') {
e.preventDefault();
popupForm.dispatchEvent(new Event('submit'));
}
});


document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closePopup();
}
});


