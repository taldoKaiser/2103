document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessibilidade=document.getElementById('BotaoDeAcessibilidade');
const opcoesDeAcessibilidade=document.getElementById('opcoesDeAcessibilidade');

botaoDeAcessibilidade.addEventListener('click'.function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-bortao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');


    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
    botaoDeAcessibilidade.setAttribute('this.ariaExpanded',!botaoSelecionado)


}


const aumentaFonteBotao=document.getElementById ('aumentaFonte');
const diminuiFonteBotao=document.getElementById ('diminuiFonte');

const alternarContraste=document.getElementById(alternarContraste);
let tamanhoAtualFonte=1;

aumentaFonteBotao.addEventListener('click',Function(){
tamanhoAtualFonte=0.1;
document.body.style. fontSize='$'
})







})