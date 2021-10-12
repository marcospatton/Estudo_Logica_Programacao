var loginCadastro ="marcospatton";
var senhaCadastrada ="123456";

var loginInformado = prompt("Informe seu login");
var senhaInformada = prompt("Informe sua senha");

if (loginCadastro == loginInformado && senhaCadastrada == senhaInformada){
    alert("Bem-vindo ao sistema " + loginInformado);   
}else{
    alert("Login inválido. tente novamente");
}