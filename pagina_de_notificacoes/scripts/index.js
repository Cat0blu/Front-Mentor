let elements = document.querySelectorAll('main > *')
let num_notification = document.querySelector('#num_notification')
let text_all_read = document.querySelector("#text_all_read")
let msgText = document.querySelector("#msgText")

window.alert('3°test mobile')

elements.forEach((element)=>{
    element.addEventListener('click', ()=>{
        let pontRed = element.querySelector('.campo_icon')
        if(pontRed && window.getComputedStyle(pontRed).display !== "none")
        {
            pontRed.style.display = 'none'
            num_notification.innerHTML = Number(num_notification.innerHTML) -1
            element.style.backgroundColor = 'white'
        }

        if(element.nextElementSibling && window.getComputedStyle(element.nextElementSibling).display === 'none')
            {
                msgText.style.display = 'block'
            }

        else 
        {
            msgText.style.display = 'none'
        }
       
    })
})

text_all_read.addEventListener('click', ()=>
{
    elements.forEach((element)=>{
        let campo_icon = element.querySelector('.campo_icon')
        if(campo_icon)
        {
            campo_icon.style.display = 'none'
            element.style.backgroundColor = 'white'
        }
        
    })
    num_notification.innerHTML = 0
})
