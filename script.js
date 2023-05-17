

// animation for text  letter after letter 
  const textJDR = document.getElementById('histoire');
const texthistory = textJDR.innerText;
textJDR.innerText = '';

let count6 = 0;
 function letterbyletter(elementid,elementtext){
 const t = setInterval(function() {
  elementid.textContent += elementtext[count6];
  count6++;
  if (elementtext[count6] === undefined) clearInterval(t);
}, 1000/20);}

letterbyletter(textJDR, texthistory)