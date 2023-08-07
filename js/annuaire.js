const radioButtons = document.querySelectorAll('input[type="radio"]');
const historyType = document.querySelectorAll('.history-contenaire')
console.log(history);


radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', function() {
        // Récupérer l'ID de la catégorie sélectionnée à partir de la valeur du bouton radio
        const selectedIdType = this.value;

        // Parcourir les éléments .history-contenaire et afficher ou masquer les histoires en fonction de l'ID
        historyType.forEach(historyType => {
            const itemIdType = historyType.getAttribute('value');

            if (selectedIdType === 'all' || itemIdType === selectedIdType) {
                historyType.style.display = 'block'; // Afficher l'élément
            } else {
                historyType.style.display = 'none'; // Masquer l'élément
            }
        });
    });
});




// // //Call api and give data 
// function selectTypeByIdValue(id_type) {
//     const data = {
//         action: 'select',
//         id_type: id_type,
//         // token: getCsrfToken()
//     }
//     console.log(data);
//     return callAPI('PUT', data);

// };


// async function callAPI(method, data) {
//     try {
//         const response = await fetch("api.php", {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         return response.json();
//     }
//     catch (error) {
//         console.error("Unable to load datas from the server : " + error);
//     }
// }