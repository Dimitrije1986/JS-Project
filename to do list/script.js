let ul = document.querySelector('ul');

/// funkcija koja dodaje elemente u listu zajedno sa dugmetom za brisanje

function clickEvent() {
	let input = document.querySelector('#input').value;
	let newElement = document.createElement('li');
	let text = document.createTextNode(input);
	

	newElement.appendChild(text);
	newElement.className = 'list'
	
	if(input === '') {
		return;
	} else { 
		document.querySelector('ul').appendChild(newElement);
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

///cekira svaki element na klik da je uradjeno

ul.addEventListener('click', e => {
  if( e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
	}
  }, false);

///// dodaje dugme na postojecu listu

  let li = document.querySelectorAll('li');

  for (let i = 0; i < li.length; i++) {
		let btn = document.createElement('button');
		let txt = document.createTextNode('X');
		btn.className = 'close';
		btn.appendChild(txt);
	 	li[i].appendChild(btn);
	 	}

/// cini dugme ucinkovitim

let btns = document.querySelectorAll('.close');


for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}