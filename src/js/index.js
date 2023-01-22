/* OBJETIVO 1 - Quando o usuário clicar no no botão 'veja o trailer', devemos abrir a modal com o video do youtube
-Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando JS
-Passo 2 - Dar um jeito de indentificar quando o usuário clicar no botão
-Passo 3 - Dar um jeito de pegar o elemento da modal no JS
-Passo 4 - Abrir a modal na tela 
   OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal
   -Passo 1 - Dar um jeito de pegar o elemento de fechar a modal usando JS
   -Passo 2 - Dar um jeito de identificar quando o usuário clicar no X
   -Passo 3 - Fechar a modal
*/

console.log(document)

const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const botaoFecharModal = document.querySelector(".fechar-modal")
const linkVideo = video.src

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
alternarModal()
video.setAttribute("src", linkVideo) 
})


botaoFecharModal.addEventListener("click", () => {
alternarModal()
video.setAttribute("src", "") 
})


