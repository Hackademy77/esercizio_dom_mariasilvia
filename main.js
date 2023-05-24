// ES 1: Lavoriamo con il DOM: creare una pagina HTML con 3 paragrafi e 3 bottoni. 
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale, 
// il secondo dovra’ rendere il testo dei paragrafi in grassetto
// il terzo dovra’ far scomparire e ricomparire i paragrafi(ricordatevi  della proprieta’ “display: none” in CSS)!
// Finire l’esempio della rubrica e del bowling 

// primo bottone 
// catturiamo gli elementi che vogliamo manipolare
let button1 = document.querySelector('#button1'); 
let change = document.querySelectorAll('.change');
// mettiamo in ascolto il primo bottone 
button1.addEventListener('click', function(){
    // console.log('sto cliccando il bottone');
    // rgb (il colore) in questo caso saranno 3 mathRandom che defonicono 3 colori casuali per il ciclo foreach dei paragrafi
    change.forEach((paragrafo)=>{
        paragrafo.style.color= `rgb(${Math.floor(Math.random() * (255 - 0 + 1) + 0)}, ${Math.floor(Math.random() * (255 - 0 + 1) + 0)}, ${Math.floor(Math.random() * (255 - 0 + 1) + 0)})`
    })
})

// secondo bottone
let button2 = document.querySelector('#button2')
// non richiamo change perchè ha la stessa classe e l'ho già dichiarato
// metto in ascolto il secondo bottone

button2.addEventListener('click', function(){
    change.forEach((paragrafo)=> {
        paragrafo.classList.toggle('fw-bold')
    });
})
// toggle mi permette al click di tornare indietro e riapllicare le modifiche 

// terzo bottone
let button3 = document.querySelector('#button3')
button3.addEventListener('click', function(){
    change.forEach((paragrafo)=>{
        paragrafo.classList.toggle('d-none')
    }) 
    // ('d-none') è richiamato anche in css 
})






