let total = 0;

const odaberiMe = (element) => {
	let mainEl = element.closest('.container');
	let btn = document.querySelector('button');
	let cena = mainEl.querySelector('.price').innerText;
	let racun = document.querySelector('.cost');
	

	cena = cena.substring(1);
	cena = parseInt(cena);


	total += cena;

	racun.innerHTML = `<div class="cost">
	                    <h3> Ukupno para: $${total}</h3>
	                    </div>`

	element.innerText = 'Odabran';
	element.setAttribute('disabled', 'true');
	mainEl.style = "background-color: gray";

}