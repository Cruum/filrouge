const JSON = [
  {
    text: "Vous fuyez à son opposé    Un frisson de peur parcourt votre échine, et votre instinct de survie vous pousse à vous éloigner précipitamment de cette créature imposante. Vous vous précipitez dans la direction opposée, espérant échapper à sa vue perçante et à sa force redoutable. Votre cœur bat la chamade tandis que vous vous éloignez de plus en plus, soudain la route se divise en deux.",
    choix1: "Aller à droite",
    choix2: "Aller à gauche",
  }
  ,
  {
    text: "Vous ne bougez pas d'un cil. Telle une statue figée par la détermination, vous choisissez de rester immobile, sans manifester la moindre réaction devant cette créature énigmatique. Vous préférez observer attentivement, analysant chaque mouvement de l'homme-lézard avec un calme apparent. Peut-être cette approche inattendue attisera-t-elle sa curiosité ou le dissuadera-t-elle de vous attaquer.",
    choix1: "Vous décidez d'attaquer",
    choix2: "Vous décidez de vous enfuir",
  },
  {
    text: "La meilleure défense, c'est l'attaque : vous lui foncez dessus. Votre courage se dresse tel un mur impénétrable devant la peur. Convaincu que l'offensive est la meilleure défense, vous vous élancez vaillamment vers l'homme-lézard, prêt à affronter le danger de front. Vous brandissez votre arme ou votre poing, déterminé à montrer votre force et à prendre l'initiative dans cette rencontre inattendue.",
    choix1: "Vous ramassez un cailloux , et luis lancez dessus",
    choix2: "Vous lui foncez dessus à bras le corps",
    choix3: "Vous prenez une branche pour le frapper"
  },
  {
    text: "Vous criez pour essayer de l'effrayer.Une lueur d'espoir scintille dans votre regard alors que vous réalisez que la terreur peut également être un puissant outil. Vous laissez échapper un cri perçant, cherchant à effrayer l'homme-lézard par votre détermination et votre audace. Votre voix résonne à travers la clairière. Vous voyez une dizaine d'homme lézard se réveiller",
    choix1: "Vous êtes mort",
  }
];


// [
//   {
//     id: 1,
//     title: 'titre',
//     text: "Vous fuyez à son opposé    Un frisson de peur parcourt votre échine, et votre instinct de survie vous pousse à vous éloigner précipitamment de cette créature imposante. Vous vous précipitez dans la direction opposée, espérant échapper à sa vue perçante et à sa force redoutable. Votre cœur bat la chamade tandis que vous vous éloignez de plus en plus, soudain la route se divise en deux.",
//     choices: [
//       {
//         text: "Aller à droite",
//         id: 2,
//       }
//       {
//         text: "Aller à gauche",
//         id: 3
//       }
//     ]

//   },
//   {
//     id: 2,
//     title: 'titre',
//     text: 'Lorem ipsum .....',
//     choices: [
//       {
//         text: 'click me',
//         id: 3
//       }
//     ]
//   },

//   {
//     id: 3,
//     title: 'titre',
//     text: "Vous ",
//     choices: [
//       {
//         text: "Aller à gauche",
//         id: 3.2
//       },
//       {
//         text: "Aller à gauche",
//         id: 3.3
//       }
//     ]
//   },

// ];

// console.log(JSON);






// animation for text  letter after letter 
const textJDR = document.getElementById('histoire');
const texthistory = textJDR.innerText;
textJDR.innerText = '';

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


function CreateSection(e, JSONTEXT, JSON1, JSON2, buttonId1, buttonId2) {
  e.addEventListener("click", function () {

    e.classList.toggle("selected")

    buttons.forEach(button => {
      button.disabled = true;
    });

    display(sectionContinue);
    createHistory(sectionContinue)

    getP.innerText = JSONTEXT;
    // const textjson = getP.innerText;
    // textjson.innerText = '';
    // letterbyletter(getP, textjson);


    const button1 = getButton(choiceTwo, getli, buttonId1);
    addButton(button1, JSON1, getli);

    const button2 = getButton(choiceTwo, getli2, buttonId2);
    addButton(button2, JSON2, getli2);


  })
}

CreateSection(buttonOne, JSON[0].text, JSON[0].choix1, JSON[0].choix2, 'buttonID1', 'buttonID2');
CreateSection(buttonTwo, JSON[1].text, JSON[1].choix1, JSON[1].choix2, 'buttonID3', 'buttonID4');
CreateSection(buttonthree, JSON[2].text, JSON[2].choix1, JSON[2].choix2, 'buttonID5', 'buttonID6');
CreateSection(buttonfour, JSON[3].text, JSON[3].choix1, JSON[3].choix1, 'buttonID7', 'buttonID8');

