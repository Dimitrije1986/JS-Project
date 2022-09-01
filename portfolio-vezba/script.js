//responsive header
	let meni = document.querySelector('.header ul');
	let btn = document.querySelector('.header button');

	btn.addEventListener('click', (e) => {

	if(btn.innerText === 'MENU'){
		meni.style.display = 'block';
		btn.innerText = 'CLOSE';
	}else {
		meni.style.display = 'none';
		btn.innerText = 'MENU';
	}

});

//Galerija

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
	displayNone();

	imgNum++;

	if(imgNum === pictures.length) {
		imgNum = 0;
	}

	pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
	displayNone();

	imgNum--;

	if(imgNum === -1) {
		imgNum = pictures.length - 1;
	}

	pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', moveLeft);

const displayNone = () => {
	pictures.forEach((img) => {
		img.style.display = 'none';
	})
}

//Portfolio
	
	let portfolioItems = document.querySelectorAll('.portfolio-single-item');
	let btns = document.querySelectorAll('.portfolio-wrapper button');
	
	

	btns.forEach(button => { 
		button.addEventListener('click', e => { 
		let category = button.getAttribute('data-category');	

			
		portfolioItems.forEach((item) => {
	       item.style.display = 'none';
		});


		if(category === 'sve') {
			portfolioItems.forEach((item) => {
			item.style.display = 'block';
		});
		}

		portfolioItems.forEach((item) => {
			if(item.getAttribute('data-category').includes(category)) {
				item.style.display = 'block';
			}
		});

		});
	});




//Modal

let modalWindows = document.querySelectorAll('.popup-modal');
let overlay = document.querySelector('.overlay');
let openModalBtns = document.querySelectorAll('.openModal');
let closeModalBtns = document.querySelectorAll('.closeModal');

openModalBtns.forEach(button => {
	let category = button.getAttribute('data-category');

	button.addEventListener('click', e => {
		modalWindows.forEach((item) => {
		if(item.getAttribute('data-category').includes(category)) { 	
		item.style.display = 'block';
	  }
	})
	    overlay.style.display = 'block';
	})
})


closeModalBtns.forEach(button => {
	button.addEventListener('click', e => {
		modalWindows.forEach((item) => {
		item.style.display = 'none';
	})
		overlay.style.display = 'none';
	})
})


