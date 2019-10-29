//var nome = "Erica bot";
//var idade = " você tem 42 anos";
//alert("Bem vindo" + nome + idade);
//var idade = 42;
//var idade2 = 10;
//alert(nome + idade + idade2);



//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse()[0]); //elemento 0
//console.log(lista.toString()[0]); //letra 0
//console.log(lista.join("|"));
//alert(lista[0]);
/*
var fruta = { nome: "maçã", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "üva", cor: "roxa" }];
console.log(frutas[1].nome);
alert(frutas[1].cor);
*/
/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/
/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
};
*/
/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth() + 1);
*/

function botao() {
    // alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://github.com/EricaSugui");
    window.location.href = "https://github.com/EricaSugui";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaochange(elemento) {
    console.log(elemento.value)
}
/*
function soma(n1, n2) {
    return n1 + n2;
}
*/
/*
var validar = 0;

function validaIdade(idade) {
    // var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;

}
var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/
/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/