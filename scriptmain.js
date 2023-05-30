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
const strsecondTittle = secondTittle.textContent;
const splitsecondTittle = strsecondTittle.split("");

text.textContent = '';
secondTittle.textContent = ''; 

function regroup(element, elementText) {
    elementText.forEach((char) => {
      if (char === " ") {
        element.innerHTML += "<span>&nbsp;</span>"; // Ajoute un espace non rompu
      } else {
        element.innerHTML += "<span>"+ char + "</span>";
      }
    });
  }

regroup(text, splitText);
regroup(secondTittle, splitsecondTittle);

let charIndex = 0;
let timer = setInterval(onTick, 100);



function onTick() {
  const spans = text.querySelectorAll('span');
  spans[charIndex].classList.add('fade');
  charIndex++;
  
  if (charIndex === spans.length) {
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