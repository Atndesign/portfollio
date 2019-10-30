var array = ["Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.","Chuck Norris peut faire des ronds avec une equerre","Chuck Norris peut écrire un traitement de texte avec la souris.","Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris","Chuck norris se souvient très bien de son futur","Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.","Google, c'est le seul endroit où tu peux taper Chuck Norris...","Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.","Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.","Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon."];

var color = ["#ce2373","#61ff7e","#a6ebc9","#5a6866","#42464c"];
var colorChoice = 0;
var arrayChoice = 0;
document.querySelector("blockquote").textContent = array[arrayChoice];

var btn = document.querySelector("button");
btn.addEventListener("click",function(){
    if(colorChoice >= color.length){
        colorChoice = 0;
        
    }
    if(arrayChoice >= array.length){
        arrayChoice = 0;
    }
    document.querySelector("blockquote").textContent = array[arrayChoice];
    var coolor = color[colorChoice];
    document.querySelector("blockquote").style.color = coolor;
    document.body.style.backgroundColor = coolor;
    document.querySelector('.author').style.color = coolor;
    document.querySelector('button').style.backgroundColor = coolor;
    colorChoice++;
    arrayChoice++;
});