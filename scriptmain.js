// aimation of main tittle
// const textMainTittle = document.querySelector('.header-tlt');;
// const textMainTittleCut = textMainTittle.innerText;
// const textSecondTittle = document.querySelector('#secondTittle');
// textMainTittle.innerText = '';

// letterbyletter(textMainTittle, textMainTittleCut)

// let count6 = 0;
//  function letterbyletter(elementid,elementtext){
//  const t = setInterval(function() {
//   elementid.textContent += elementtext[count6];
//   count6++;
//   if (elementtext[count6] === undefined) clearInterval(t);
// }, 1000/20);}


// function splitText (text){
//   const strText = text.textContent;
//   const splitText = strText.split("");
//   text.textContent = '';


  
//   callLetter(text)
//   onTick(text)
// }

// //cut letter for have array

// function callLetter(splitText){
//   for(let i = 0; i < splitText.length; i++ ) {
//      text.innerHTML += "<span>"+ splitText[i] + "</span>";
//   }
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// // function for get letter
// function onTick (text) {
//   const span = text.querySelectorAll('span')[char];
//   span.classList.add('fade');
//   char++
  
//   if(char === splitText.length) {
//     complete();
//     return
//   }
// }

// splitText (textMainTittle)
// //function timer of letter
// function complete () {
//   clearInterval(timer);
//   timer = null;
// }



// const textMainTittle = document.querySelector('.header-tlt');;
// const textMainTittleCut = textMainTittle.innerText;
// const textSecondTittle = document.querySelector('#secondTittle');
// textMainTittle.innerText = '';
// element = text  
// elementTExt = splitText
// const text = document.querySelector('.header-tlt');
// const strText = text.textContent;
// const splitText = strText.split("");

// text.textContent = '';

// function regroup(element, elementText){
//     elementText.forEach((char) => {
//     text.innerHTML += "<span>"+ char + "</span>";
// });}
// regroup(text, splitText)
// let charIndex = 0;
// let timer = setInterval(onTick, 50);

// onTick(text)
// function onTick(element) {
//   element.querySelectorAll('span')[charIndex].classList.add('fade');
//   charIndex++;
  
//   if (charIndex === element.querySelectorAll('span').length) {
//     complete();
//     return;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }

const text = document.getElementById('mainTittle');
const strText = text.textContent;
const splitText = strText.split("");

const secondTittle = document.getElementById('secondTittle');
const strSecondTittle = secondTittle.textContent;
const splitSecondTittle = strSecondTittle.split("");

text.textContent = '';
secondTittle.textContent = '';

function regroup(element, elementText) {
  elementText.forEach((char) => {
    if (char === " ") {
      element.innerHTML += "<span>&nbsp;</span>"; // Ajoute un espace non rompu
    } else {
      element.innerHTML += "<span>" + char + "</span>";
    }
  });
}

regroup(text, splitText); // Divise le texte du premier titre
regroup(secondTittle, splitSecondTittle); // Divise le texte du deuxième titre

let charIndexText = 0;
let charIndexSecondTittle = 0;
let timer = setInterval(onTick, 100);

function onTick() {
  const spansText = text.querySelectorAll('span');
  const spansSecondTittle = secondTittle.querySelectorAll('span');

  if (charIndexText < spansText.length) {
    spansText[charIndexText].classList.add('fade');
    charIndexText++;
  }

  if (charIndexSecondTittle < spansSecondTittle.length) {
    spansSecondTittle[charIndexSecondTittle].classList.add('fade');
    charIndexSecondTittle++;
  }

  if (charIndexText === spansText.length && charIndexSecondTittle === spansSecondTittle.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// on click in the "histoires" on menu: show new selection
const buttonNav = document.getElementById("principal")
const menunv = document.getElementById("menu")
buttonNav.addEventListener('click', function(){
    const displayNone = document.querySelector(".navinnav");
    menunv.classList.toggle("transition")
    if(!displayNone.classList.contains("display")){ 
        setTimeout(function() {
            displayNone.style.opacity = "0"; // Appliquer l'opacité 0
            setTimeout(function() {
              displayNone.classList.toggle("display");
              displayNone.style.opacity = "1"; // Rétablir l'opacité 1
            }, 500); // Temps de transition
          }, 500);
        } else {
          displayNone.style.opacity = "0"; // Appliquer l'opacité 0
          setTimeout(function() {
            displayNone.classList.toggle("display");
            displayNone.style.opacity = "1"; // Rétablir l'opacité 1
          }, 100); // Temps de transition
        }
    })

let menuAberto = false;
function abrirMenu(ev) {
	let menu = document.getElementById("menu");
	if (menuAberto === false) {
		menu.style.left = 0;
		menuAberto = true;
	} else {
		menu.style.left = "-120px";
		menuAberto = false;
	}
	
}





//   document.querySelectorAll('.nav_link_destok').addEventListener('click', function(){
  
  //   this.classList.toggle("display")
  //  })
  

//  let elements = document.querySelectorAll('.button');

//  let clickEvent = () => {
//      console.log('some event content here...')
//  }


 

