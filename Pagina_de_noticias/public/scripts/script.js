let menu_icon = window.document.querySelector('#icon_menu')
let menu_close = window.document.querySelector('#close_menu')
let conteudo = window.document.querySelector("#conteudo")
let body = window.document.querySelector("body")
let campo_menuMobile = window.document.querySelector("#campo_menu_mobile")

menu_icon.addEventListener('click', ()=>{

    conteudo.style.opacity = '0.4' 
    body.style.backgroundColor = 'hsla(236, 13.10%, 42.00%, 0.56)'
    campo_menuMobile.style.display = 'flex'
})

menu_close.addEventListener('click', ()=>{

    conteudo.style.opacity = '1' 
    campo_menuMobile.style.display = 'none'
    body.style.backgroundColor = 'white'
})