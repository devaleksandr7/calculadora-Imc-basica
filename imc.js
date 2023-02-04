let calcular = document.getElementById("calcular");
//função imc e recebimento de dados 
function imc (){
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");

    if(nome !== "" && altura !== "" && peso !== ""){//serve para que todos os campos sejam preenchidos 
        const valorImc = (peso / (altura * altura)).toFixed(2);//pega o resultado e deixa com duas casas decimais
        //area das classificações
        let classificacao = "";//iniciando a variável
        if(valorImc < 18.5){
        classificacao = "abaixo do peso"
        }else if(valorImc < 25){
            classificacao = "normal"
        }else if(valorImc < 30){
            classificacao = "sobrepeso"
        }else if(valorImc < 35){
            classificacao = "obesidade grau I"
        }else if(valorImc < 40){
            classificacao = "obesidade grau II"
        }else{
            classificacao = "obesidade grau III(morbida)"
        }
        resultado.textContent = nome + " seu IMC é " + valorImc + " e você está classificado em : " + classificacao;
    }else{
        resultado.textContent = "Preencha todos os campos!";
    }
}
calcular.addEventListener("click", imc);//evento para quando clicar executar a função