
var icones = window.document.querySelectorAll('.icon')

icones.forEach((icone) =>{
    icone.addEventListener('click', ()=>{
        var icone_add = icone.querySelector('.add')
        var icone_remove = icone.querySelector('.remove')
        var textContent = icone.closest('.conteudo').nextElementSibling
        var texbolde = icone.previousElementSibling

        if(window.getComputedStyle(icone_add).display === 'flex')
        {
            icone_add.style.display = 'none'
            icone_remove.style.display = 'flex'
            textContent.style.display = 'block'
            icone_remove.style.backgroundColor = 'rgba(0, 0, 0, 0.651)'
            texbolde.style.color = 'rgb(55, 114, 202)'
        }

        else 
        {
             icone_add.style.display = 'flex'
            icone_remove.style.display = 'none'
            textContent.style.display = 'none'
            texbolde.style.color = 'black'
        }
    })
})