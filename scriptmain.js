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
