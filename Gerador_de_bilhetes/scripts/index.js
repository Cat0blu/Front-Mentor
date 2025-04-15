const file_input = document.querySelector("#file_input")
const img_avatar = document.querySelector("#img_avatar")
const btn_remove_img = document.querySelector("#btn_remove_img")
const btn_change_img = document.querySelector("#btn_change_img")
const icon_upload = document.querySelector("#cmp_icon_upload")
const suggestion = document.querySelector("#suggestion")
const nome = document.getElementById("name")
const email = document.getElementById("email")
const git_username = document.getElementById("git_username")
const btn_gerar_ticket = document.getElementById("gerar_ticket")
let ok_name,ok_email,ok_git
 


file_input.addEventListener('change', (evt)=>{
    const file = evt.target.files[0]
    console.log(file)
    
    if(file)
    {

        console.log(file.name)
      
        const reader = new FileReader()

        reader.onload = (e)=>{
            img_avatar.src = e.target.result
            img_avatar.style.display = "block" 
            btn_change_img.style.display = "inline-block"
            btn_remove_img.style.display = "inline-block"
            icon_upload.style.display = "none"
            suggestion.style.display = "none"
            
           
        }
        

        reader.readAsDataURL(file)
    }
})

btn_remove_img.addEventListener("click", ()=>{

    img_avatar.src = ""
    img_avatar.style.display = "none" 
    btn_change_img.style.display = "none"
    btn_remove_img.style.display = "none"
    icon_upload.style.display = "block"
    suggestion.style.display = "block"
   
    

})

setInterval(()=>{
    
    if(window.getComputedStyle(btn_remove_img).display === "none")
        {
            file_input.disabled = false
        }

    else 
    {
        file_input.disabled = true
    }    
        
},100)

btn_gerar_ticket.addEventListener("click", ()=>{
   
    if(nome.value === '')
    {
        nome.nextElementSibling.style.display = "flex"
        nome.style.border = "1px solid hsl(7, 88%, 67%)"
        ok_name = false
    }
    else 
    {
        nome.nextElementSibling.style.display = "none"
        nome.style.border = "1px solid hsl(245, 15%, 58%)"
        ok_name = true
    }

    if(email.value === '')
    {
        email.nextElementSibling.style.display = "flex"
        email.style.border = "1px solid hsl(7, 88%, 67%)"
        ok_email = false
    }

    else 
    {
        email.nextElementSibling.style.display = "none"
        email.style.border = "1px solid hsl(245, 15%, 58%)"
        ok_email = true
    }    

    if(git_username.value === '')
    {
        git_username.nextElementSibling.style.display = "flex"
        git_username.style.border = "1px solid hsl(7, 88%, 67%)"
        ok_git = false
    }
    else 
    {
        git_username.nextElementSibling.style.display = "none"
        git_username.style.border = "1px solid hsl(245, 15%, 58%)"
        ok_git = true
    }
    

    if(ok_name && ok_email && ok_git)
    {
        window.alert('Todos os parametros foram atendidos!')
        document.querySelector("main").style.display = "none"
    }

})
