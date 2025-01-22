var button = window.document.querySelector('#submit')

var parametros = 0

button.addEventListener('click', clicou)

function clicou(){
    parametros = 0
    var nome = window.document.querySelector('#text_name')
    var sobrenome = window.document.querySelector('#last_name')
    var email = window.document.querySelector('#email')
    var message =  window.document.querySelector('#campo_message textarea')
    var general = window.document.querySelector('#general')
    var support =  window.document.querySelector('#support')

    //1°parametro
    if((nome.value.length < 5 || ! /^[a-zA-Z]+$/.test(nome.value))) 
    {
        nome.nextElementSibling.classList.remove('hidden')
        nome.classList.add('invalido')
    }

    else 
    {  
        parametros +=1
        nome.classList.remove('invalido')
        nome.nextElementSibling.classList.add('hidden')
    }

    //2°parametro
    if (sobrenome.value.length < 5 || ! /^[a-zA-Z]+$/.test(sobrenome.value))

    {
        sobrenome.nextElementSibling.classList.remove('hidden')
        sobrenome.classList.add('invalido')
    }

    else
    {
        sobrenome.classList.remove('invalido')
        sobrenome.nextElementSibling.classList.add('hidden')
        parametros +=1
    }
     
    //3°parametro
    if ((! general.checked)  && (!support.checked))
    {
        p0 = window.document.getElementById('p0')
        p0.classList.remove('hidden')
    }

    else 
    {
        p0.classList.add('hidden')
        parametros +=1
    }

   //4°parametro
   if (message.value.length < 5)
   {
        p1 = window.document.getElementById('p1')
        p1.classList.remove('hidden')
        message.style.border = '1px solid red'
   }

   else
   {
        p1.classList.add('hidden')
        message.style.border = '1px solid black'
        parametros +=1
   }

   //5°parametro
   if(! window.document.querySelector('#permission').checked)
   {
        p2 = window.document.getElementById('p2')
        p2.classList.remove('hidden')
   }

   else
   {
        p2.classList.add('hidden')
        parametros +=1
   }

   //6°parametro
   if(! /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value))

    {
        email.nextElementSibling.classList.remove('hidden')
        email.classList.add('invalido')
    }

    else 
    {
        email.nextElementSibling.classList.add('hidden')
        email.classList.remove('invalido')
        parametros +=1
    }
    
    if(parametros >= 6)
    {   
        var alert_ = window.document.getElementById('conteudo_alert')
        alert_.classList.remove('alert-hidden')
        alert_.classList.add('alert-show')

        setTimeout(() =>{
            alert_.classList.add('alert-hidden')
            alert_.classList.remove('alert-show')
        }, 3000)
    }

    else 
    {
        window.alert('Campos incorretos ou incompletos, corrija seus dados!')
    }
}

function general_click() {
    const generalRadio = window.document.querySelector('#general');
    const supportRadio = window.document.querySelector('#support');
    
    window.document.querySelectorAll('.campo_radio').forEach((campo) => {campo.classList.remove('active')});

    if (generalRadio.checked) {
        generalRadio.closest('.campo_radio').classList.add('active');
    } 
   
    else if (supportRadio.checked) {
        supportRadio.closest('.campo_radio').classList.add('active');
    }
}