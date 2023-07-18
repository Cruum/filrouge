const btn = document.getElementById('add_choise');
const choiceZone = document.getElementById('choice_zone');
const list = document.getElementById('list');
const selectTheme = document.querySelector('#theme-task');
console.log(btn);

//ADD BUTTON

btn.addEventListener('click', e => {

    const form = document.createElement("form");
    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    textarea.setAttribute("type", "text");
    button.setAttribute("type", "button");
    button.innerText = "Sauvegarder";

    list.appendChild(form);
    form.appendChild(textarea);
    form.appendChild(button);


    button.addEventListener('click', e => {
        const divParent = e.target.closest('.main-nav-list').dataset.id
        console.log(divParent);
        e.preventDefault();
        addChoice(divParent, textarea.value)
            .then(apiResponse => {
                if (apiResponse.result) addTextChoice(textarea.value, apiResponse.idNode);
                else console.error('Erreur lors de la création du texte.');
                console.log(apiResponse);
                form.remove();
            });
    });
});

function addChoice(idParent, textButton) {
    const data = {
        action: 'addchoice',
        idParent: idParent,
        textButton: textButton,
        // token: getCsrfToken()
    }
    return callAPI('PUT', data);
}

function addTextChoice(text, id) {
    const listItem = document.createElement('li');
    const divInLi = document.createElement('div');
    const paraph = document.createElement("p");
    const buttonLess = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const option = document.createElement("option");

    listItem.classList.add("node")
    buttonLess.classList.add("button-delete")
    buttonEdit.classList.add("js-btn-rename")
    option.classList.add("test")

    paraph.innerText = text;
    buttonLess.innerText = "➖";
    buttonEdit.innerText = 'Edit';
    option.innerText = text;

    list.appendChild(listItem);
    listItem.appendChild(divInLi);
    divInLi.appendChild(paraph);
    divInLi.appendChild(buttonEdit)
    divInLi.appendChild(buttonLess)
    selectTheme.appendChild(option)


    listItem.setAttribute('data-id', id)
    buttonLess.setAttribute("type", "button");
    buttonLess.setAttribute('data-id', id)
    buttonEdit.setAttribute('data-id', id)
    buttonEdit.setAttribute('type', 'button')
    paraph.setAttribute('data-text-id', id)
    selectTheme.setAttribute('data-text-id', id)
    option.setAttribute('data-id', id)
}


//DELETE BUTTON

function callDeleteButtonClick(e) {
    const listItem = e.target.closest('.node');
    const id = e.target.dataset.id;
    console.log(id);
    deleteBtn(e.target.closest('.node').dataset.id)
        .then(apiResponse => {
            if (!apiResponse.result) {
                console.error('Problème avec la requête.');
                return;
            }
            const elements = document.querySelectorAll(`[data-id="${id}"]`);
            console.log(elements);
            elements.forEach(element => element.remove());
            e.target.closest('.node').remove()
        });
}


// function callDeleteButtonClick(e) {
//     const listItem = e.target.closest('.node');
//     const id = listItem.dataset.idNode;
//     deleteBtn(id)
//         .then(apiResponse => {
//             if (!apiResponse.result) {
//                 console.error('Problème avec la requête.');
//                 return;
//             }
//             const elements = document.querySelectorAll(`[data-id="${id}"]`);
//             elements.forEach(element => element.remove());
//         });
// }




list.addEventListener('click', e => {
    if (e.target.classList.contains('button-delete')) {
        callDeleteButtonClick(e);
    }
});


function deleteBtn(idChoice) {
    const data = {
        action: 'delete',
        idChoice: idChoice,
        // token: getCsrfToken()
    }
    console.log(data);
    return callAPI('PUT', data);

};


//RENAME 
//Can use rename function on new create

list.addEventListener('click', e => {
    if (e.target.classList.contains('js-btn-rename')) {
        handleEditButtonClick(e);
    }
});



//Add form with text and can modify the BDD with api, display button edit and remove it when APIReponse
function handleEditButtonClick(e) {
        e.target.classList.add('display');
        const li = e.target.closest('li');
        const id = e.target.dataset.id;
        const name = li.querySelector(`[data-text-id="${id}"]`).innerText;
console.log(name);
        const form = createForm(id, name);
        li.appendChild(form);
        form.addEventListener('submit', e => {
            e.preventDefault();
            renameChoice(e.target.dataset.formId, form.querySelector('input[name="choiceText"]').value)
                .then(apiResponse => {
                    if (apiResponse.result) updateChoiceText(apiResponse.idChoice, apiResponse.choiceText);
                    else console.error('Erreur lors du renommage.');
                    
                    form.remove();
                    document.querySelector(`.js-btn-rename[data-id="${apiResponse.idChoice}"]`).classList.remove('display');
                });
        });
    }
//     );
// });


function createForm(id, name) {
    const form = document.querySelector("#renameFormTemplate").content.cloneNode(true);

    form.querySelector('[name="choiceText"]').value = name;
    form.querySelector('[name="idChoice"]').value = id;
    form.querySelector('form').dataset.formId = id;
    
    return form.querySelector('form');
}


function renameChoice(idChoice, choiceText) {

    const data = {
        action: 'rename',
        idChoice: idChoice,
        choiceText: choiceText,
        // token: getCsrfToken()
    }
    console.log(data);
    return callAPI('PUT', data)
};

function updateChoiceText(id, name) {
    document.querySelector(`[data-text-id="${id}"]`).innerText = name;
}



async function callAPI(method, data) {
    try {
        const response = await fetch("api.php", {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    catch (error) {
        console.error("Unable to load datas from the server : " + error);
    }
}


// const test = document.querySelectorAll('option.test')
// console.log(test);
// test.addEventListener('click', e => { console.log(e);})


selectTheme.addEventListener('change', (e) => {
    const selectedChoiceValue = e.target.value;
  const selectedChoiceId = e.target.options[e.target.selectedIndex].dataset.id;
  const selectNode = e.target.closest('.select').dataset.id
  console.log(selectedChoiceValue);
  addChoseDestination(selectNode, selectedChoiceId)
  .then(apiResponse => {
    if (apiResponse.result) addChoiceDestination(selectedChoiceValue, apiResponse.idChoice );
    else console.error('Erreur lors de la création du texte.');
    console.log(apiResponse);
});
});

function addChoiceDestination(value, id){
    const ul = document.getElementById('choiceContext'); 
    const listItem = document.createElement('li');
    const buttonLess = document.createElement("button");
    
    listItem.innerText = value;
    buttonLess.innerText = "➖";
    
    ul.appendChild(listItem)
    listItem.appendChild(buttonLess)

    listItem.setAttribute('data-id', id)
    buttonEdit.setAttribute('type', 'button')

}










function addChoseDestination(idNode, idChoice) {
    const data = {
        action: 'addChoiceDestination',
        idNode: idNode,
        idChoice: idChoice,
        // token: getCsrfToken()
    }
    console.log(data);
    return callAPI('PUT', data);
}