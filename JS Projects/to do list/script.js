function clickEvent() {
	let input = document.querySelector('#input').value;
	let newElement = document.createElement('div');

	newElement.innerText = input;
	newElement.className = 'list'
	
	
	if(input === '') {
		return;
	} else { 
		document.querySelector('.container').appendChild(newElement);
	}
	document.querySelector('#input').value = "";


	let btn = document.createElement('button');

	btn.innerText = 'X';
	btn.className = 'close';
	newElement.appendChild(btn);

	btn.addEventListener('click', (e) => {
		 newElement.style.display = "none";
	})
}