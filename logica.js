function pulaLinha(){
    document.write("<br>")
    
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}


var media =28;
var anoAtual = 2021;
var geracao = (anoAtual - 1500)/media;
mostra(geracao);
