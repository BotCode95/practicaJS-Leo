

document.addEventListener("DOMContentLoaded", crearDiv)


let segundos = 10;
let cards = document.getElementById('cards');
function crearDiv() {
    let interval = setInterval(function() {
        if (segundos === 0) {
            clearInterval(interval); 
            let bomba = document.getElementById('img-bomba');
            bomba.classList.add('img-bomba');
            bomba.hidden = false;

            cards.hidden= true;
        }
        else {
            let card = document.createElement('div');
            card.classList.add('card-div');
            card.classList.add('col-1');
            cards.appendChild(card);
            segundos--;
        }
    }, 1000);
}