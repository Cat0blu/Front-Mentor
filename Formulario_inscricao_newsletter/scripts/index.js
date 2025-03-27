
let button_submit = document.querySelector("#button_submit")
let email = document.querySelector("#email")
let text_error = document.querySelector("#text_error")
const section = document.querySelector('section')
const button_section = document.querySelector("section button")
const main = document.querySelector('main')

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const button_activate = ()=>{

}

button_submit.addEventListener('click', ()=>{
    if(email.value === "")
    {
        email.classList.add("error")
        text_error.style.display = "block"

    }
    console.log(regex.test(email.value))
    if(!(regex.test(email.value)))
        {
            email.classList.add("error")
            text_error.style.display = "block"
        }

    else 
    {
        window.alert("Muito bem email valido!")
        main.classList.add("hidden")
        section.classList.remove("hidden")
    }    
})

email.addEventListener("click", ()=>{
    if(email.classList.contains("error"))
    {
        email.classList.remove("error")
    }
    text_error.style.display = "none"
})

button_section.addEventListener("click" ,()=>{
    window.location.reload()
})