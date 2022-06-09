// Exemplo 1
var clicouPrimeiro = false;
function botao(){
    if(!clicouPrimeiro){
        document.getElementById("meuParagrafo").innerHTML = "Clicou no botão!";
        clicouPrimeiro = true;
    }else{
        document.getElementById("meuParagrafo").innerHTML = "Este é um paragrafo.";
        clicouPrimeiro = false;
    }
    
}