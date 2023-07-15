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
