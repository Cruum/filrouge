

// animation for text  letter after letter 
let textJDR = document.getElementById('histoire');
let texthistory = textJDR.innerText;
textJDR.innerText = '';
console.log(texthistory);

function letterbyletter(elementid, elementtext) {
  let count6 = 0;
  const t = setInterval(function () {
    elementid.textContent += elementtext[count6];
    count6++;
    if (elementtext[count6] === undefined) clearInterval(t);
  }, 1000 / 20);
  //Click show all the text on this function
  document.addEventListener("click", function () {
    clearInterval(t); // Supprimer le setInterval s'il est en cours
    elementid.textContent = elementtext;
  })
}

letterbyletter(textJDR, texthistory);

const buttonOne = document.getElementById('choice1');
const buttonTwo = document.getElementById('choice2');
const buttonthree = document.getElementById('choice3');
const buttonfour = document.getElementById('choice4');
const sectionContinue = document.getElementById('nextHistorie');
const buttons = document.querySelectorAll('.choice-itm')
const choiceTwo = document.getElementById('choiceTwo');
const getP = document.createElement('p');
const getDiv = document.createElement('div');
const getUl = document.createElement('ul');
const getli = document.createElement('li');
const button2 = document.createElement('button');
const button = document.createElement('button');
const getli2 = document.createElement('li');

function display(section) {
  section.classList.toggle("display");
}



//create section for histories
function createHistory(element) {
  getDiv.classList.add('contenaire-history-wrap');
  element.appendChild(getDiv);

  getP.classList.add('history-txt');
  getDiv.appendChild(getP)
};

//create buttons
function getButton(element, li, buttonId) {
  getUl.classList.add('button-lst');
  getUl.classList.add('history-txt');
  element.appendChild(getUl)

  li.classList.add('button-item');
  getUl.appendChild(li)

  const button = document.createElement('button');
  button.classList.add('choice-itm');
  button.setAttribute('id', buttonId); // Ajouter l'ID au bouton
  li.appendChild(button);

  return button; // Retourner le bouton créé
}


//add text choice on button
function addButton(element, text, li) {
  element.classList.add('choice-itm');
  li.appendChild(element)
  element.innerText = text;
}


// button.classList.add('choice-itm');
// getli.appendChild(button)

//replace text by new noeud
function replaceText(text){
  textJDR.innertext = text
  // let newText = text.replace(texthistory)
  // // newText.innerText = '';
  // textJDR.innerHTML += newText;
// console.log(newText);
}


function CreateSection(e, text)
  
  // JSONTEXT, JSON1, JSON2, buttonId1, buttonId2)
   {
  e.addEventListener("click", function () {

    e.classList.toggle("selected")

    buttons.forEach(button => {
      button.disabled = true;
    });

    // texthistory.textContent = JSON[0].text;

    display(sectionContinue);
    createHistory(sectionContinue)

    replaceText(text)

    // getP.innerText = JSONTEXT;
    // const textjson = getP.innerText;
    // textjson.innerText = '';
    // letterbyletter(getP, textjson);


    // const button1 = getButton(choiceTwo, getli, buttonId1);
    // addButton(button1, JSON1, getli);

    // const button2 = getButton(choiceTwo, getli2, buttonId2);
    // addButton(button2, JSON2, getli2);


  })
}
CreateSection(buttonOne, JSON[0].text )
// CreateSection(buttonOne, JSON[0].text, JSON[0].choix1, JSON[0].choix2, 'buttonID1', 'buttonID2');
// CreateSection(buttonTwo, JSON[1].text, JSON[1].choix1, JSON[1].choix2, 'buttonID3', 'buttonID4');
// CreateSection(buttonthree, JSON[2].text, JSON[2].choix1, JSON[2].choix2, 'buttonID5', 'buttonID6');
// CreateSection(buttonfour, JSON[3].text, JSON[3].choix1, JSON[3].choix1, 'buttonID7', 'buttonID8');


