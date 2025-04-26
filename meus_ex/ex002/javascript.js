const imagem = document.querySelector('img#imagem')
const mostrar = document.getElementById('ocult')

mostrar.addEventListener('click', () => {
    imagem.classList.toggle('active')
})