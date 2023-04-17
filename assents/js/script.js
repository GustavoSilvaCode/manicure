let botao = document.querySelector('#opcao-batata');
let batatas = document.querySelector('.area-batata');
let hamburguer = document.querySelector(".area-hamburguer");
let sobremesas = document.querySelector(".area-sobremesas");
let refrigerantes = document.querySelector(".area-refrigerantes");

function exibirHamburguer(){
    hamburguer.style.display = "flex";
    batatas.style.display = "none";
    sobremesas.style.display = "none";
    refrigerantes.style.display = "none";
}

function exibirBatatas(){
    hamburguer.style.display = "none";
    batatas.style.display = "flex";
    sobremesas.style.display = "none";
    refrigerantes.style.display = "none";
}

function exibirSobremesas(){
    hamburguer.style.display = "none";
    batatas.style.display = "none";
    sobremesas.style.display = "flex";
    refrigerantes.style.display = "none";
}

function exibirRefrigerantes(){
    hamburguer.style.display = "none";
    batatas.style.display = "none";
    sobremesas.style.display = "none";
    refrigerantes.style.display = "flex";
}