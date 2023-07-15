//RENAME 
//Can use rename function on new create choice

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