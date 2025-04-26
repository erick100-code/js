const accordions = document.querySelectorAll('div.accordion') 

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('div.accordion-body')
        body.classList.toggle('active') 
    })
})