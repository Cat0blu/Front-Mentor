"use strict"

let content_body = document.querySelector("#content_body")
let all_content = document.querySelector("#all_content")
let content_activate = document.querySelector("#content_activate")
let content_inactivate = document.querySelector("#content_inactivate")
let theme_sun = document.querySelector("#sun_cmp")
let theme_moon = document.querySelector("#moon_cmp")
let body = document.querySelector("body")
let cmp_icon_img = document.querySelector("#cmp_icon_img")

let modal_delete = document.querySelector("#modal_delete")
let deletar = document.querySelector("#del")
let not_del = document.querySelector("#not-del")
let close_modal = document.querySelector("#close_modal")

body.classList.add("light")
cmp_icon_img.innerHTML = "<img src='imgs/logo.svg'>"


//criando tags e add conteudo 
const funcao_main = (valorH2, valorP, img_value,isActive)=> {
    
        let cmp_div = document.createElement("div")
        cmp_div.setAttribute("class","cmp_content")

        let new_img = document.createElement("img")
        new_img.setAttribute("src", img_value)
        new_img.setAttribute("class", "img_icon")

        let new_h2 = document.createElement("h2")
        new_h2.innerHTML = valorH2

        let new_p = document.createElement("p")
        new_p.innerHTML = valorP
        new_p.setAttribute("class", "paragraphs")

        let part_top = document.createElement("div")
        part_top.setAttribute("class", "part_top")

        let cmp_texts = document.createElement("div")
        cmp_texts.setAttribute("class", "cmp_texts")

        let button_remove = document.createElement("button")
        button_remove.setAttribute("class", "remove")
        button_remove.innerHTML = "Remove"

        let button_active_inactive = document.createElement("button")
        button_active_inactive.setAttribute("class", "button_active_inactive")
        button_active_inactive.innerHTML = "<span class='active inactive'> </span> "
        if(isActive)
        {
            button_active_inactive.querySelector(".active").classList.remove("inactive")
        }

        else 
        {
            button_active_inactive.style.background = "hsl(0, 0%, 78%)"
        }

        let part_bottom = document.createElement("div")
        part_bottom.setAttribute("class","part_bottom")

        cmp_texts.appendChild(new_h2)
        cmp_texts.appendChild(new_p)

        part_top.appendChild(new_img)
        part_top.appendChild(cmp_texts)

        part_bottom.appendChild(button_remove)
        part_bottom.appendChild(button_active_inactive)

        cmp_div.appendChild(part_top)
        cmp_div.appendChild(part_bottom)

        content_body.appendChild(cmp_div)
    
        //evento
        button_active_inactive.addEventListener("click", (evt)=>
        {
            let span = button_active_inactive.querySelector(".active")
            if(span.classList.contains("inactive"))
            {
                console.log(evt.target)
                span.classList.remove("inactive")
                span.parentNode.style.background = "hsl(3, 71%, 56%)"
            }

            else 
            {
                console.log(evt.target)
                span.classList.add("inactive")
                span.parentNode.style.background = "hsl(0, 0%, 78%)"
            }
        }
    )
}

//chamando .json
 async function chamarJson()
{
    const resp = await fetch("scripts/data.json")
    if(resp.ok)
    {
        const arquivo_json = await resp.json()
        console.log(arquivo_json)

        for(let count= 0; count < arquivo_json.length; count++)
        {
            funcao_main(arquivo_json[count].name, arquivo_json[count].description, arquivo_json[count].logo, arquivo_json[count].isActive)
        }
    }

    else
    {
        console.log(`Tivemos um [Erro..] verifique seu codigo.`)
    }
}


// mudança de tema
theme_moon.addEventListener("click", ()=>{
        theme_moon.style.display = "none"
        theme_sun.style.display = "flex"

        body.classList.remove("light")
        body.classList.add("night")

        cmp_icon_img.innerHTML = "<img src='imgs/logo_white_.jpg'>"
    }
)

theme_sun.addEventListener("click", ()=>{
        theme_sun.style.display = "none"
        theme_moon.style.display = "flex"
    
        body.classList.remove("night")
        body.classList.add("light")

        cmp_icon_img.innerHTML = "<img src='imgs/logo.svg'>"
     
    }
)

//evento
function events()
{   
    //button remove
    let interval00
    
    console.log(document.getRootNode())
   
    interval00 = setInterval(()=>{
        const button_remove = document.querySelectorAll(".remove")
            button_remove.forEach((button)=>{
                button.addEventListener("click", (disparador)=>
                {
                    if(button_remove)
                        {   
                            modal_delete.style.display = "block"
                            deletar.addEventListener("click", ()=>{
                                disparador.target.parentNode.parentNode.remove()
                                modal_delete.style.display = "none"
                            })

                            not_del.addEventListener("click", ()=>{
                                modal_delete.style.display = "none"
                            })

                            close_modal.addEventListener("click", ()=>{
                                modal_delete.style.display = "none"
                            })
                            
                        }
                
                        else 
                        {
                            console.log("Acabou os botões de remover")
                            clearInterval(interval00)
                        }
                    }
                )
            }
        )
    },1000)
}
chamarJson()

events()

// filtagem dos elementos

//all content
setTimeout(()=>{
    let cmp_content = document.querySelectorAll(".cmp_content")
    
    all_content.addEventListener("click", ()=>{
        let all_selects = document.querySelectorAll(".selected")
        all_selects.forEach((select)=>{
        select.classList.remove("selected")
        })

        all_content.classList.add("selected")
        if(cmp_content.length > 0)
        {   
            cmp_content.forEach((cmp)=>
                    {
                        cmp.style.display = "block"
                    }
                )
            }
        }   
    )
}, 1000)

// só os activates
setTimeout(()=>{
    let cmp_content = document.querySelectorAll(".cmp_content")

    content_activate.addEventListener("click", ()=>{
  
        if(cmp_content.length >0)
        {   
            let all_selects = document.querySelectorAll(".selected")
            all_selects.forEach((select)=>{
                select.classList.remove("selected")
            })
            content_activate.classList.add("selected")
            cmp_content.forEach((cmp)=>
                {   
                    let active_span = cmp.querySelector(".part_bottom > .button_active_inactive > .active")
                    if(active_span.classList.contains("inactive"))
                    {
                        cmp.style.display = "none"
                    }

                    else 
                    {
                        cmp.style.display = "block"
                    }
                }
            )
        }
    })
},1000)

// só os inactivates
setTimeout(()=>{
    let cmp_content = document.querySelectorAll(".cmp_content")
    content_inactivate.addEventListener("click", ()=>{
 
            if(cmp_content.length >0)
            {   
                let all_selects = document.querySelectorAll(".selected")
                all_selects.forEach((select)=>{
                    select.classList.remove("selected")
                })
                content_inactivate.classList.add("selected")
                cmp_content.forEach((cmp)=>
                    {   
                        let active_span = cmp.querySelector(".part_bottom > .button_active_inactive > .active")
                        if(!(active_span.classList.contains("inactive")))
                        {
                            cmp.style.display = "none"
                        }

                        else 
                        {
                            cmp.style.display = "block"
                        }
                    }
                )
            }
        }
    )
},1000)