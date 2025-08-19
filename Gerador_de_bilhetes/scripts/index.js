"use strict"
let change_img_avatar = document.querySelector("#change_img_avatar")
let upload_img_avatar = document.querySelector("#upload_img_avatar")
let maxSize = 500 * 1024 //bytes
let btns_img_loaded = document.querySelector("#btns_img_loaded") 
let upload_img_text_info = document.querySelector("#upload_img_text_info")
let btn_remove = document.getElementById("btn_remove")
let btn_change = document.getElementById("btn_change")
let full_name = document.getElementById("name_")
let email = document.getElementById("email_")
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let githuser = document.getElementById("gituser_")
let gerar_ticket = document.getElementById("gerar_ticket")
let ok = 0
let date_ = new Date()
let month = date_.toLocaleString("default", {month: "short"})
let day = date_.getDate()
let year = date_.getFullYear()
let date = document.getElementById("date")
let post_main = document.getElementById("post_main")
let name_post_main = document.querySelectorAll(".post_main_name_")
let email_post_main = document.querySelector(".post_main_email_")
let gituser_post_main = document.querySelector(".post_main_gituser_")
let img_post_main = document.querySelector("#post_main_cmp_ticket_user_img")

date.innerHTML = `${month}&nbsp${day},&nbsp${year}&nbsp/&nbspSão Paulo,&nbspSP`

change_img_avatar.addEventListener("change", (evt)=>{
    let file = evt.target.files[0]
    console.log(file)
    if(! file)
    {
        return
    }
    else if(file.size > maxSize)
    {
        console.log("Arquivo muito grande")
        document.querySelector("#cmp_info").style.display = "none"
        document.querySelector("#cmp_upload").nextElementSibling.style.visibility = "visible"
    }
    else 
    {
        const reader = new FileReader()
        document.querySelector("#cmp_info").style.display = "flex"
        document.querySelector("#cmp_upload").nextElementSibling.style.visibility = "hidden"
        upload_img_avatar.classList.add("img_loaded")
        btns_img_loaded.classList.remove("hidden")
        upload_img_text_info.classList.add("hidden")
        reader.onload = (arquivo)=>{
            upload_img_avatar.src = arquivo.target.result
            img_post_main.src = arquivo.target.result
        }

        reader.readAsDataURL(file)
    }
})

btn_remove.addEventListener("click", ()=>{
    upload_img_avatar.classList.remove("img_loaded")
    btns_img_loaded.classList.add("hidden")
    upload_img_text_info.classList.remove("hidden")
    upload_img_avatar.src = "imgs/icon-upload.svg"
})
btn_change.addEventListener("click", ()=>{
    change_img_avatar.click()
})

gerar_ticket.addEventListener("click", ()=>{
    ok = 0
    if(Number(full_name.value) || full_name.value.length < 5)
    {
        full_name.nextElementSibling.style.visibility = "visible" 
    }else 
    {
        full_name.nextElementSibling.style.visibility = "hidden"
        ok ++
    }

    if(! regex.test(email.value))
    {
        email.nextElementSibling.style.visibility = "visible" 
    }else 
    {
        email.nextElementSibling.style.visibility = "hidden"
        ok ++
    }

    if(Number(githuser.value) || githuser.value.length < 5)
    {
        githuser.nextElementSibling.style.visibility = "visible" 
    }else 
    {
        githuser.nextElementSibling.style.visibility = "hidden"
        ok ++
    }

    if(ok === 3)
    {
        window.alert("Você passou para a proxima tela!")
        document.querySelector("main").style.display = "none"
        post_main.style.display = "block"
        name_post_main.forEach((tag)=>{
            tag.innerHTML = full_name.value
        })
        email_post_main.innerHTML = email.value
        gituser_post_main.innerHTML = githuser.value
    }
})

