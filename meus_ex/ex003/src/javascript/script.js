const accordions = document.querySelectorAll('div.accordion')//accordions recebe uma lista com todas as divs com class accordion

accordions.forEach(accordion => {//seleciona cada elemento da lista da variavel accordions
    accordion.addEventListener('click', () => {//chama uma função anonima ao clicar em cada elemento da lista 
        const body = accordion.querySelector('div.accordion-body')//variavel body recebe seleciona div accordion-body
        body.classList.toggle('active')//adiciona a class active se não tiver. se tiver ela remove tudo isso ao clicar
    })
})
