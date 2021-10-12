


function pulaLinha(){
    document.write("<BR>");
    document.write("<Br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var multiplicador = 1;

for(var multiplicador = 1; multiplicador <= 10; multiplicador ++){

    mostra(7 * multiplicador);
    
}

mostra("FIM");

