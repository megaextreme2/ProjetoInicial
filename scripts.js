var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados")
var email = document.getElementById("email");
var telefone = document.getElementById("tel");
var cep = document.getElementById("cep");
var logra = document.getElementById("logradouro");
var numero = document.getElementById("numbe");
var complemento = document.getElementById("comple");
var bairro = document.getElementById("bar");
var cidade = document.getElementById("city");
var estado = document.getElementById("estado");



function alertar(event){
    //alert("Você clicou no botão!!!!" + event);
    const url = `http://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
    .then(function(resposta){
        return resposta.json()
    })
    .then(function (dados){
        logradouro.value = dados.logradouro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;
        bairro.value = dados.bairro
    })

}

function saidaDeDados(){
    saida.innerText = "Nome: " + nome.value +
        "\n Email: " + email.value + "\nTelefone " + telefone.value+
        "\n CEP: " + cep.value + "\n Logradouro: " + logra.value +
        "\n Numero: " + numero.value + "\n Completo: " + complemento.value +
        "\n Cidade: " + cidade.value +  "\n Estado: " + estado.value;
}
