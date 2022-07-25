let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

let btn = document.querySelector('.text');

btn.addEventListener('click', (e) => {
	for(let i = 0; i < splittedText.length; i++) {
	if(splittedText[i] == " ") {
		splittedText[i] = "&nbsp;";
	}

	textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let spans = textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {
	let singleSpan = spans[k];
	

	singleSpan.className = 'fadeMove';
	k++;

	if(k === spans.length) {
		clearInterval(interval);
	}

	btn.setAttribute('disabled', true);

}, 80);
})



let border = document.querySelector('.border-line');
let animationWidth = 0;
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');

plusBtn.addEventListener('click', (e) => {
	
	animationWidth += 10;

	if(animationWidth >= 100) {
		animationWidth = 100;
	} 

	border.style.width = animationWidth + '%';

})

minusBtn.addEventListener('click', (e) => {
	animationWidth -= 10;

	if(animationWidth >= 100) {
		animationWidth = 100;
	} 

	border.style.width = animationWidth + '%';
})

/*window.onscroll = () => {

	if(this.oldScroll > this.scrollY) {
		animationWidth -= 1.5;
	} else {
		animationWidth += 1.5;
	}

	if(animationWidth >= 100) {
		animationWidth = 100;
	} 

	if(animationWidth <= 0) {
		animationWidth = 0;
	}
	

	border.style.width = animationWidth + '%';

	this.oldScroll = this.scrollY;


	imageAnimation();
}*/

let bmwBtn = document.querySelector('#bmw');
let audiBtn = document.querySelector('#audi');
let leftImage = document.querySelector('.slideFromLeft');
let rightImage = document.querySelector('.slideFromRight');

bmwBtn.addEventListener('click', (e) => {
	leftImage.classList.add('animated');
});

audiBtn.addEventListener('click', (e) => {
	rightImage.classList.add('animated');
})


/*const imageAnimation = () => {
	let sectionForAnimation = document.querySelector('.section2 .images');
	let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;

	let leftImage = document.querySelector('.slideFromLeft');
	let rightImage = document.querySelector('.slideFromRight');

	if(sectionPosition < screenPosition) {
		leftImage.classList.add('animated');
		rightImage.classList.add('animated');
	}
}*/

