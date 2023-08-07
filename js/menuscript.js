
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