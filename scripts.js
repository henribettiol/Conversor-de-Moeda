const moedaDestino = document.getElementById("moedaDestino");
const valor = document.getElementById("valor");
const botao = document.getElementById("botao")

const mOrigem = document.getElementById("mOrigem");
const valorOrigem = document.getElementById("valorOrigem");
const mDestino = document.getElementById("mDestino");
const valorDestino = document.getElementById("valorDestino");

const icone = document.getElementById("icone");

const imagemSecreta = document.getElementById("imagemSecreta")


const dolar = 5.24;
const euro = 6.23;

function converter() {
    if (moedaDestino.value === "dolar") {
        const valorConvertido = (Number(valor.value) / dolar)
        mOrigem.innerText = "Real"
        valorOrigem.innerText = `R$ ${(Number(valor.value)).toFixed(2)}`
        mDestino.innerText = "Dólar"
        valorDestino.innerText = `US$ ${valorConvertido.toFixed(2)}`
        icone.src = "./assets/eua2.png"
    } else if (moedaDestino.value === "euro") {
        const valorConvertido = (Number(valor.value) / euro)
        mOrigem.innerText = "Real"
        valorOrigem.innerText = `R$ ${(Number(valor.value)).toFixed(2)}`
        mDestino.innerText = "Euro"
        valorDestino.innerText = `€ ${valorConvertido.toFixed(2)}`
        icone.src = "./assets/euro2.png"
    }
};

botao.addEventListener("click", converter);

function verificarValorSecreto() {
    if (Number(valor.value) === 1746) {
        imagemSecreta.style.display = "block";
    } else {
        imagemSecreta.style.display = "none";
    }
}

botao.addEventListener("click", () => {
    converter();
    verificarValorSecreto();
});