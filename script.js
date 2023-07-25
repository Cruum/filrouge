// const JSON = [
//   {
//     id: 1,
//     text: "Vos paupières sont lourdes, vous fermez les yeux et au moment où vous les ouvrez, vous n’êtes plus sur votre chaise mais vous vous trouvez à la frontière entre une vaste clairière verdoyante et l’oré d’une forêt. <br> Vous entendez un bruit, vous retournez et vous voyez un homme-lézard qui siffle, il est vert, écailleux avec un bouclier qui semble être en bois et une masse faite d’une pierre attachée à un morceau de bois. Il vous dépasse en taille d’au moins une tête. Que faites-vous?",
//     img: "img/actu-guides-prairies.jpg",
//     choice: [
//       {
//         text: "Vous fuyez à son opposé",

//         nextText: 2
//       },
//       {
//         text: "Vous ne bougez pas d’un cil",

//         nextText: 3

//       },
//       {
//         text: "La meilleur défense c’est l’attaque, vous lui foncer dessus",

//         nextText: 4
//       },
//       {
//         text: "Vous criez pour essayer de l’effrayer",

//         nextText: 5
//       },
//     ]
//   }
//   ,

//   {
//     id: 2,
//     text: "Vous fuyez à son opposé    Un frisson de peur parcourt votre échine, et votre instinct de survie vous pousse à vous éloigner précipitamment de cette créature imposante. Vous vous précipitez dans la direction opposée, espérant échapper à sa vue perçante et à sa force redoutable. Votre cœur bat la chamade tandis que vous vous éloignez de plus en plus, soudain la route se divise en deux.",
//     img: "img/tableaux-sur-toile-deux-chemins.jpg",
//     choice: [
//       {
//         text: "Aller à droite",

//         nextText: 6
//       },
//       {
//         text: "Aller à gauche",

//         nextText: 1
//       },
//     ]
//   }
//   ,
//   {
//     id: 3,
//     text: "Vous ne bougez pas d'un cil. Telle une statue figée par la détermination, vous choisissez de rester immobile, sans manifester la moindre réaction devant cette créature énigmatique. Vous préférez observer attentivement, analysant chaque mouvement de l'homme-lézard avec un calme apparent. Peut-être cette approche inattendue attisera-t-elle sa curiosité ou le dissuadera-t-elle de vous attaquer.",
//     img: "img/une-statue.jpg",
//     choice: [
//       {
//         text: "Vous décidez d'attaquer",

//         nextText: 1
//       },
//       {
//         text: "Vous décidez de vous enfuir",

//         nextText: 1
//       },
//     ]
//   }
//   ,

//   {
//     id: 4,
//     text: "La meilleure défense, c'est l'attaque : vous lui foncez dessus. Votre courage se dresse tel un mur impénétrable devant la peur. Convaincu que l'offensive est la meilleure défense, vous vous élancez vaillamment vers l'homme-lézard, prêt à affronter le danger de front. Vous brandissez votre arme ou votre poing, déterminé à montrer votre force et à prendre l'initiative dans cette rencontre inattendue.",
//     img: "img/ea7aae00b61ecc5856d3ca2929e0d5b8.jpg",
//     choice: [
//       {
//         text: "Vous ramassez un cailloux , et luis lancez dessus",

//         nextText: 1
//       },
//       {
//         text: "Vous lui foncez dessus à bras le corps",

//         nextText: 1
//       },

//       {
//         text: "Vous prenez une branche pour le frapper",

//         nextText: 1
//       },
//     ]
//   }
//   ,

//   {
//     id: 5,
//     text: "Vous criez pour essayer de l'effrayer.Une lueur d'espoir scintille dans votre regard alors que vous réalisez que la terreur peut également être un puissant outil. Vous laissez échapper un cri perçant, cherchant à effrayer l'homme-lézard par votre détermination et votre audace. Votre voix résonne à travers la clairière. Vous voyez une dizaine d'homme lézard se réveiller",
//     img: "img/crier.jpg",
//     choice: [
//       {
//         text: "Vous êtes mort",

//         nextText: -1
//       },

//     ]
//   }
//   ,

//   {
//     id: 6,
//     text: "vous apercevez un sentier étroit bordé d'arbres majestueux. Un instinct vous murmure à l'oreille qu'il pourrait mener à un lieu sûr, un poste de surveillance où vous pourriez trouver de l'aide et un abri. Sans hésiter, vous prenez cette voie, espérant que ce choix vous rapprochera de votre salut. Finalement, vous émergez d'une épaisse végétation pour découvrir un poste de surveillance fortifié. Des gardes vêtus d'armures étincelantes vous accueillent, leurs regards incrédules témoignant de leur surprise à rencontrer des voyageurs. ",
//     img: "img/800px-Gravelines_Corps_de_Garde_01.jpg",
//     choice: [
//       {
//         text: "Se rapprocher du fort",

//         nextText: 7
//       },
//       {
//         text: "Repartir en arrière",

//         nextText: 1
//       },
//       {
//         text: "Partir en courant",
//         nextText: 10
//       },
//     ]
//   }
//   ,
//   {
//     id: 7,
//     text: "En vous approchant du poste de surveillance fortifié, vous sentez une lueur d'espoir grandir en vous. Les gardes vêtus d'armures étincelantes vous observent avec attention, leurs regards témoignant de leur dévouement à protéger les voyageurs égarés. Vous vous approchez prudemment d'eux, essayant de paraître calme malgré l'urgence de votre situation. le garde s'exclama : Qui va là ? Identifiez-vous ! Je suis un voyageur en détresse. J'ai besoin d'aide et d'un abri.",
//     img: "img/800px-Gravelines_Corps_de_Garde_01.jpg",
//     choice: [
//       {
//         text: "Je suis un voyageur en détresse. J'ai besoin d'aide et d'un abri. J'ai été pourchassé par une créature imposante, un homme-lézard. Je pensais trouver refuge ici",
//         nextText: 8
//       },
//       {
//         text: "Repartir en arrière",
//         nextText: 6
//       },
//       {
//         text: "Je suis un voyageur en détresse. J'ai besoin d'aide et d'un abri. J'ai été pourchassé par une créature imposante, un homme-lézard. Heureusement, j'ai réussi à le tuer, mais je crains qu'il n'ait eu des semblables qui me traquent.",
//         nextText: 9
//       },
//     ]
//   }
//   ,
//   {
//     id: 8,
//     text: "Un homme-lézard ? Vous avez eu de la chance de vous retrouver sur notre chemin. Nous sommes ici pour protéger les voyageurs des dangers de cette région. Entrez rapidement, nous vous mettrons en sécurité. Les gardes s'écartent pour vous permettre de passer la porte d'entrée du poste de surveillance. Vous entrez et remarquez l'atmosphère sécurisante qui règne à l'intérieur. Les murs sont épais et les fenêtres équipées de barreaux solides. Une table de commandement est située au centre de la pièce, où un garde en chef vous observe attentivement. Bienvenue au poste de surveillance. Je suis le capitaine des gardes. Pouvez-vous nous donner plus de détails sur cette créature que vous avez rencontrée ?",
//     img: "img/intérieur.jpg",
//     choice: [
//       {
//         text: "Je suis épuisé et j'ai besoin de repos. J'ai parcouru une longue distance pour échapper à l'homme-lézard.",
//         nextText: 11
//       },
//       {
//         text: "Tout lui expliqué, que vous venez d'un autre lieu sans aucun monstre, que vous étiez en train de regarder votre écran avant d'atterir ici",
//         nextText: 12
//       },
//       {
//         text: "Dire que vous voulez devenir un guerrier afin de prendre votre revenche sur la bête",
//         nextText: 13
//       },
//       {
//         text: "Resté muet",
//         nextText: 14
//       },
//     ]
//   }
//   ,
//   {
//     id: 9,
//     text: "Un homme-lézard ? Vous avez eu de la chance de vous retrouver sur notre chemin. Nous sommes ici pour protéger les voyageurs des dangers de cette région. Entrez rapidement, nous vous mettrons en sécurité. Les gardes s'écartent pour vous permettre de passer la porte d'entrée du poste de surveillance. Vous entrez et remarquez l'atmosphère sécurisante qui règne à l'intérieur. Les murs sont épais et les fenêtres équipées de barreaux solides. Une table de commandement est située au centre de la pièce, où un garde en chef vous observe attentivement. Bienvenue au poste de surveillance. Je suis le capitaine des gardes. Pouvez-vous nous donner plus de détails sur cette créature que vous avez rencontrée ?",
//     img: "1007550.jpg",
//     choice: [
//       {
//         text: "Je suis épuisé et j'ai besoin de repos. J'ai parcouru une longue distance pour échapper à l'homme-lézard.",
//         nextText: 15
//       },
//       {
//         text: "Tout lui expliqué, que vous venez d'un autre lieu sans aucun monstre, que vous étiez en train de regarder votre écran avant d'atterir ici",
//         nextText: 16
//       },
//       {
//         text: "Dire que vous voulez devenir un guerrier afin de prendre votre revenche sur la bête",
//         nextText: 17
//       },
//     ]
//   }
//   ,
//   {
//     id: 10,
//     text: "Vous courez le plus vite et le plus loin possible",
//     img: "img/courir.jpg",
//     choice: [
//       {
//         text: "Vous courez",

//         nextText: 10
//       },

//     ]
//   }
//   ,
//   {
//     id: 11,
//     text: "Nous allons vous offrir un abri et de la nourriture, ne vous inquiétez pas. Votre sécurité est notre priorité. En ce qui concerne l'homme-lézard, nous avons déjà eu des rencontres avec ces créatures. Elles sont agressives et dangereuses. Nous devons prendre des mesures pour assurer la sécurité de tous les voyageurs. Si vous êtes prêt à aider, nous pourrions utiliser vos informations sur les habitudes et les mouvements de cette créature.",
//     img: "img/intérieur.jpg",
//     choice: [
//       {
//         text: "Aller manger puis vous reposer dans un lit qui vous a été aloué",
//         nextText: 15
//       },
//       {
//         text: "Rester ici à lui poser des questions sur l'endroit ou vous êtes",
//         nextText: 16
//       },
//     ]
//   }
//   ,

// ];



const textElement = document.getElementById('histoire');
const optionButtonsElement = document.getElementById('div_button')
const optionButtonschoice = document.getElementById('zone_choice')
const picture = document.getElementById("img");

let t = null;

// function qui va retourner l'identifiant du noeud courant

function getIDNode() {
  return parseInt(textElement.dataset.idNode)
}

function setIDNode(id) {
  textElement.setAttribute('data-id-node', id)
}

// get one node from JSON by data-node on html and filter all JSON and take matches data-id with id on JSON, can change information if we change text (exmple: .img, .id ect...)
function getNodeFromId(idNode) {
  let arrayTextFromId = JSON.filter(node => node.id == idNode)
  return arrayTextFromId[0];
}


// // function write letter by letter with callback for use function after first function finish
function letterbyletter(elementtext) {
  let count = 0;
  t = setInterval(function () {
    textElement.textContent += elementtext[count];
    count++;
    if (elementtext[count] === undefined) {
      clearInterval(t);
      transition()
      textElement.removeEventListener('click', showText);
    }
  }, 1000 / 200);


  textElement.addEventListener('click', showText);
}

function showText() {
  clearInterval(t); // Supprimer le setInterval s'il est en cours
  transition();
  textElement.textContent = getNodeFromId(getIDNode()).text;
  textElement.removeEventListener('click', showText);
}




//Transition choice to invisibilty at visible
function transition() {
  optionButtonschoice.classList.toggle("transition")
  if (optionButtonschoice.classList.contains("display")) {
    setTimeout(function () {
      optionButtonschoice.classList.toggle("display");
      optionButtonschoice.style.opacity = "0"; // Appliquer l'opacité 0
      setTimeout(function () {
        optionButtonschoice.style.opacity = "1"; // Rétablir l'opacité 1
      }, 500); // Temps de transition
    }, 500);
  }
  else {
    optionButtonschoice.style.opacity = "0"; // Appliquer l'opacité 0
    setTimeout(function () {
      optionButtonschoice.classList.toggle("display");
      optionButtonschoice.style.opacity = "1"; // Rétablir l'opacité 1
    }, 100); // Temps de transition
  }
}


let state = {}

// Begin histori main function
function startGame() {
  state = {}
  showTextNode(JSON[0].id)
}

//ShowText
function showTextNode(textNodeIndex) {
  const textNode = JSON.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  texthistory = textElement.innerText;
  textElement.innerText = '';


  setIDNode(textNode.id)

  //here include all function data

  letterbyletter(texthistory);

  picture.src = textNode.img
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }


  //create button
  textNode.choice.forEach(option => {
    {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('choice-itm')
      button.addEventListener('click', () => selectOption(option))

      optionButtonsElement.appendChild(button)
    }
  })
}



function selectOption(option) {
  optionButtonschoice.classList.toggle("display");
  optionButtonschoice.classList.toggle("transition");
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}

startGame()

