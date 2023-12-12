
function go(numero_botao) {
    elemento = document.getElementById('pergunta_' + (numero_botao+1));
    setInterval(proximo, 1000);
}

function proximo(){
    
    elemento.style.display = 'block';
    elemento.scrollIntoView();
}

function back(numero_botao) {
    elemento = document.getElementById('pergunta_' + (numero_botao-1));
    elemento.scrollIntoView();
}