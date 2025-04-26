const accordions = document.querySelectorAll('div.accordion') //pega todas as div com class accordion

accordions.forEach(accordion => {// forEach seleciona todos (accordion) da um nome para cada elemento da lista da variavel accordions que selecionou todas as divs e então abaixo com o nome que demos a cada elemento da lista executamos estilo ou coisas a ele (cada elemento)
    accordion.addEventListener('click', () => {// () => Função anônima: Não tem nome e é usada no local onde é passada.
        const body = accordion.querySelector('div.accordion-body') // aqui é o que vai ser executado dentro da função
        body.classList.toggle('active') // toggle adiciona a class se ela não existir e tira se ela existir
    })
})