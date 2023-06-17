const JSON = [
  {
    id : 1,
    text: "Vos paupières sont lourdes, vous fermez les yeux et au moment où vous les ouvrez, vous n’êtes plus sur votre chaise mais vous vous trouvez à la frontière entre une vaste clairière verdoyante et l’oré d’une forêt. <br> Vous entendez un bruit, vous retournez et vous voyez un homme-lézard qui siffle, il est vert, écailleux avec un bouclier qui semble être en bois et une masse faite d’une pierre attachée à un morceau de bois. Il vous dépasse en taille d’au moins une tête. Que faites-vous?",
    img: "img/actu-guides-prairies.jpg",
    choice:[ 
      {
        text: "Vous fuyez à son opposé",
      
        nextText : 2
      },
    {
      text:"Vous ne bougez pas d’un cil",

      nextText : 3

    } ,
     {text:"La meilleur défense c’est l’attaque, vous lui foncer dessus",
     
     nextText : 4    
    },
    {text:"Vous criez pour essayer de l’effrayer",
    
    nextText : 5   
   },
    ]
  }
  ,

  {
    id : 2,
    text: "Vous fuyez à son opposé    Un frisson de peur parcourt votre échine, et votre instinct de survie vous pousse à vous éloigner précipitamment de cette créature imposante. Vous vous précipitez dans la direction opposée, espérant échapper à sa vue perçante et à sa force redoutable. Votre cœur bat la chamade tandis que vous vous éloignez de plus en plus, soudain la route se divise en deux.",
    img: "1007550.jpg",
    choice:[
      {text:"Aller à droite",
     
      nextText : 1    
     },
     {text:"Aller à gauche",
    
     nextText : 1    
    },
    ]
  }
  ,
  {
    id : 3,
    text: "Vous ne bougez pas d'un cil. Telle une statue figée par la détermination, vous choisissez de rester immobile, sans manifester la moindre réaction devant cette créature énigmatique. Vous préférez observer attentivement, analysant chaque mouvement de l'homme-lézard avec un calme apparent. Peut-être cette approche inattendue attisera-t-elle sa curiosité ou le dissuadera-t-elle de vous attaquer.",
    img: "img/une-statue.jpg",
    choice:[
      {text: "Vous décidez d'attaquer",
 
      nextText : 1    
     },
     {text:"Vous décidez de vous enfuir",
     
     nextText : 1    
    },
    ]
  }
  ,

  {
    id : 4,
    text: "La meilleure défense, c'est l'attaque : vous lui foncez dessus. Votre courage se dresse tel un mur impénétrable devant la peur. Convaincu que l'offensive est la meilleure défense, vous vous élancez vaillamment vers l'homme-lézard, prêt à affronter le danger de front. Vous brandissez votre arme ou votre poing, déterminé à montrer votre force et à prendre l'initiative dans cette rencontre inattendue.",
    img: "img/ea7aae00b61ecc5856d3ca2929e0d5b8.jpg",
    choice:[
      {text: "Vous ramassez un cailloux , et luis lancez dessus",
   
      nextText : 1    
     },
     {text:"Vous lui foncez dessus à bras le corps",
 
     nextText : 1    
    },
    
     {text:"Vous prenez une branche pour le frapper",
     
     nextText : 1    
    },
    ]
  }
  ,

  {
    id : 5,
    text: "Vous criez pour essayer de l'effrayer.Une lueur d'espoir scintille dans votre regard alors que vous réalisez que la terreur peut également être un puissant outil. Vous laissez échapper un cri perçant, cherchant à effrayer l'homme-lézard par votre détermination et votre audace. Votre voix résonne à travers la clairière. Vous voyez une dizaine d'homme lézard se réveiller",
    choice:[
      {text:"Vous êtes mort",
    
      nextText : -1    
     },

    ]
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

// // console.log(JSON);
// let textContext = document.getElementById('histoire').innerText;
// console.log(textContext);
// const buttonOne = document.getElementById('choice1');
// const zoneChoice = document.getElementById('zone_choice')
// const divChoice = document.getElementById('div_button')

// // // animation for text  letter after letter 
// let textJDR = document.getElementById('histoire');
// let texthistory = textJDR.innerText;
// textJDR.innerText = '';

// let buttoninner = buttonOne.innerText
// buttonOne.innerText = '';







// console.log(texthistory);




// function changeText(button, text, idChoice, textChoice, textChoice2, textChoice3, textChoice4 ){
  // button.addEventListener('click', function () { 
//   divChoice.classList.toggle("display");
//   // this.parentNode.style.display="none";
//   textZoneLetter(text)
//   document.getElementById("img").src="1007550.jpg";


//   createChoice(idChoice, textChoice)
//   createChoice(idChoice, textChoice2)
//   createChoice(idChoice, textChoice3)
//   createChoice(idChoice, textChoice4)

// } )}

// // Create button on div and classlist
// function createChoice(idChoice, textChoice){
  //   const getDiv = document.createElement('div');
  //   const button = document.createElement('button');
  //   divChoice.appendChild(getDiv)
  //   zoneChoice.appendChild(getDiv)
  //   getDiv.classList.add('button-item');
  //   button.classList.add('choice-itm');
  //   getDiv.appendChild(button);
  //   button.setAttribute('id', idChoice)
  //   button.innerText = textChoice
  // }
  // console.log(JSON[1].text);
  
  // changeText(buttonOne, JSON[1].text, 'id2', JSON[0].choix1, JSON[0].choix2, JSON[0].choix3, JSON[0].choix4)
  
  
  
  
  
  
  
  
  {/* <div class="container">
  <div id="text">Text</div>
  <div id="option-buttons" class="btn-grid">
  <button class="btn">Option 1</button>
  <button class="btn">Option 2</button>
  <button class="btn">Option 3</button>
  <button class="btn">Option 4</button>
  </div>
</div> */}




// // function write letter by letter with callback for use function after first function finish
function letterbyletter(elementid, elementtext, callback) {
  
  let count6 = 0;
  const t = setInterval(function () {
    elementid.textContent += elementtext[count6];
    count6++;
    if (elementtext[count6] === undefined) {
      clearInterval(t);
      if(typeof callback === 'function'){
        callback();
        divChoice.classList.toggle("display")
      }
    }
  }, 1000 / 20);

  //Click show all the text on this function
  textElement.addEventListener("click", function () {
    clearInterval(t); // Supprimer le setInterval s'il est en cours
    elementid.textContent = elementtext;
    optionButtonsElement.classList.toggle("display");
    if(typeof callback === 'function'){
      callback();
      
    }
    else {return}
})
} 

// letterbyletter(textJDR, texthistory, function () {
//   letterbyletter(buttonOne, buttoninner, undefined);
// });



const textElement = document.getElementById('histoire')
const optionButtonsElement = document.getElementById('div_button')
const picture = document.getElementById("img");

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function textZoneLetter(text){
  textElement.innerText = text.text
  // textElement = document.getElementById('histoire');
  texthistory = textElement.innerText;
  textJDR.innerText = '';
  letterbyletter(textJDR, texthistory, function(){
    // letterbyletter(idChoice, textChoice, undefined)
})
}

function showTextNode(textNodeIndex) {
  const textNode = JSON.find(textNode => textNode.id === textNodeIndex)
  // const pictureNode = (pictureNode => textNode.id === textNodeIndex)
  // textZoneLetter(textNode)
  // textElement.innerText = textNode.text
  texthistory = textElement.innerText;
  textElement.innerText = '';
  letterbyletter(textElement, texthistory)



  picture.src = textNode.img
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }


//create button
  textNode.choice.forEach(option => {
    // if (showOption(option))
     {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('choice-itm')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}


// function showOption(option) {
//   return option.requiredState == null || option.requiredState(state)
// }



function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  // state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        // requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        // requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        // requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()




















// const myPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(function(){ myResolve("I love You !!"); }, 3000);
// });

// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });

// function loadScript(src){
//   return new Promise((resolve, reject) => {
//       let script = document.createElement('script');
//       script.src = src;
//       document.head.append(script);
//       script.onload = () => resolve('Fichier ' + src + ' bien chargé');
//       script.onerror = () => reject(new Error('Echec de chargement de ' + src));
//   });
// }
// const promesse1 = loadScript('boucle.js');
// const promesse2 = loadScript('script2.js');



// function typeWriter(word, index){
//   if(index < word.length){
//    setTimeout(() => {
//     textJDR.innerText += `<span>${word[index]}</span>`
//     typeWriter(texthistory, index +1)
//     }, 300);   
//   }
// }
// setTimeout(() => {
//   typeWriter(texthistory,0)
// }, 500);


// changeText(buttonOne, JSON[1].text)

// function recap(button, text, idChoice){
  //   createChoice(idChoice)
  
// }
// recap(buttonOne, JSON[1].text, 'id2')
// console.log(texthistory);


// const buttonOne = document.getElementById('choice1');
// const buttonTwo = document.getElementById('choice2');
// const buttonthree = document.getElementById('choice3');
// const buttonfour = document.getElementById('choice4');
// const sectionContinue = document.getElementById('nextHistorie');
// const buttons = document.querySelectorAll('.choice-itm')
// const choiceTwo = document.getElementById('choiceTwo');
// const getP = document.createElement('p');
// const getDiv = document.createElement('div');
// const getUl = document.createElement('ul');
// const getli = document.createElement('li');
// const button2 = document.createElement('button');
// const button = document.createElement('button');
// const getli2 = document.createElement('li');

// function display(section) {
//   section.classList.toggle("display");
// }



// //create section for histories
// function createHistory(element) {
//   getDiv.classList.add('contenaire-history-wrap');
//   element.appendChild(getDiv);

//   getP.classList.add('history-txt');
//   getDiv.appendChild(getP)
// };

// //create buttons
// function getButton(element, li, buttonId) {
//   getUl.classList.add('button-lst');
//   getUl.classList.add('history-txt');
//   element.appendChild(getUl)

//   li.classList.add('button-item');
//   getUl.appendChild(li)

//   const button = document.createElement('button');
//   button.classList.add('choice-itm');
//   button.setAttribute('id', buttonId); // Ajouter l'ID au bouton
//   li.appendChild(button);

//   return button; // Retourner le bouton créé
// }


// //add text choice on button
// function addButton(element, text, li) {
//   element.classList.add('choice-itm');
//   li.appendChild(element)
//   element.innerText = text;
// }


// // button.classList.add('choice-itm');
// // getli.appendChild(button)

// //replace text by new noeud
// function replaceText(text){
//   textJDR.innertext = text
//   // let newText = text.replace(texthistory)
//   // // newText.innerText = '';
//   // textJDR.innerHTML += newText;
// // console.log(newText);
// }


// function CreateSection(e, text)
  
//   // JSONTEXT, JSON1, JSON2, buttonId1, buttonId2)
//    {
//   e.addEventListener("click", function () {

//     e.classList.toggle("selected")

//     buttons.forEach(button => {
//       button.disabled = true;
//     });

//     // texthistory.textContent = JSON[0].text;

//     display(sectionContinue);
//     createHistory(sectionContinue)

//     replaceText(text)

//     // getP.innerText = JSONTEXT;
//     // const textjson = getP.innerText;
//     // textjson.innerText = '';
//     // letterbyletter(getP, textjson);


//     // const button1 = getButton(choiceTwo, getli, buttonId1);
//     // addButton(button1, JSON1, getli);

//     // const button2 = getButton(choiceTwo, getli2, buttonId2);
//     // addButton(button2, JSON2, getli2);


//   })
// }
// CreateSection(buttonOne, JSON[0].text )
// // CreateSection(buttonOne, JSON[0].text, JSON[0].choix1, JSON[0].choix2, 'buttonID1', 'buttonID2');
// // CreateSection(buttonTwo, JSON[1].text, JSON[1].choix1, JSON[1].choix2, 'buttonID3', 'buttonID4');
// // CreateSection(buttonthree, JSON[2].text, JSON[2].choix1, JSON[2].choix2, 'buttonID5', 'buttonID6');
// // CreateSection(buttonfour, JSON[3].text, JSON[3].choix1, JSON[3].choix1, 'buttonID7', 'buttonID8');


