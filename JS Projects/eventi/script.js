let smeh = document.querySelector('.smeh');

smeh.addEventListener('click', ()=> {
  alert('Pita ucitelj Pericu, koliko je 3 i 3? Kaze Perica, nereseno! :)');
});



let btns = document.querySelectorAll('button');


btns.forEach(function (btn) {
  btn.addEventListener('click', (e) => {
      console.log(e.target.innerText)
  })
})



/*let myFunction = (item) => {
  sum += item;
  console.log(sum);
}

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)*/

/****************************************/

let link = document.querySelector('#link');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.innerText);
})


/*************************************************/

let select = document.querySelector('select');

select.addEventListener('change', (e) => {
  e.preventDefault();
  alert(e.target.value)
})

/*********************************************/

let predstavi_se = document.querySelector('.name');

predstavi_se.addEventListener('click', (e) => {
  let text;
  let osoba = prompt('Molim te upisi svoje ime:');
  if (osoba == null || osoba == "") {
    text = "Nisi se potpisao.";
  } else {
    text = `Zdravo ${osoba}! Kako si danas?`;
  }
  document.querySelector('#demo').innerText = text;
})


/***********************************************/

window.addEventListener('resize', () => {
    if(window.innerWidth > 1000) {
      console.log('vece je');
  } else {
    console.log('manje je');
  }
});

/***************************************************/

let input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
  console.log(e.target.value);
})

input.addEventListener('mousemove', (event) => {
 console.log('mis pomeren');
});


