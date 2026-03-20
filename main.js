//menu

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navList.classList.toggle('active');
});

//dark-light mode

const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

const enableDarkMode = () => {
	body.classList.add('dark-mode');
}

const disableDarkMode = () => {
	body.classList.remove('dark-mode');
}

darkModeButton.addEventListener('change', () =>{
	if(darkModeButton.checked){
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});

//muktiple text
const words = ["Hardworking", "Patient", "Responsible Person"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
	}else {
		header.style.boxShadow = none;
	}
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelecorAll('header nav a');

window.onscroll = () => {
	senctions.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if (top >= offset && top < offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('active');
			});
			document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active');
		}
		
	});
};

navLinks.forEach(link =>{
	link.addEventListener('click', () =>{
		hamburger.classList.remove('active');
		navList.classList.remove('active');
	});
});



