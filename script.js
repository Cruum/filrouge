// Wrap every letter in a span
// var textWrapper = document.querySelector('.history-txt');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml14 .line',
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "easeInOutExpo",
//     duration: 900
//   }).add({
//     targets: '.ml14 .letter',
//     opacity: [0,1],
//     translateX: [40,0],
//     translateZ: 0,
//     scaleX: [0.3, 1],
//     easing: "easeOutExpo",
//     duration: 800,
//     offset: '-=600',
//     delay: (el, i) => 150 + 25 * i
//   }).add({
//     targets: '.ml14',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


  const p6 = document.getElementById('histoire');
const text6 = p6.innerText;
p6.innerText = '';

let count6 = 0;
const t = setInterval(function() {
    p6.textContent += text6[count6];
    count6++;
    if (text6[count6] === undefined) clearInterval(t);
}, 1000/20);