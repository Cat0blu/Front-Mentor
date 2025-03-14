"use strict";
let button_calcular = document.querySelector("#calcular")
let standard = document.querySelector("#standard")
let resultado = document.querySelector("#result")
let campo_rds = document.querySelector("#cmp_rds")
let radios = document.querySelectorAll("#repayment, #interest_only")

document.querySelector("#clear_all").addEventListener("click",()=>{
    location.reload()
} )

radios.forEach((rd)=>{
    rd.addEventListener("click", ()=>{
      let divs = document.querySelectorAll("#cmp_rds > div")

      divs.forEach((campo)=>{campo.classList.remove("selecionado")})

        if(rd.checked)
        {
            rd.closest("div").classList.add("selecionado")
        }
    })
})

button_calcular.addEventListener("click", ()=>{

    let valor_hipoteca = document.querySelector("#valor_inicial")
    let prazo = document.querySelector("#prazo_pagamento")
    let taxa = document.querySelector("#taxa")
    let rds = document.getElementsByName("radios")  //nodeList  
    let ok,ok1,ok2,tudo_ok

    //[Error]
    if(valor_hipoteca.value == "" || ["e,E"].includes(valor_hipoteca))
    {
        console.log("[Error]")
        valor_hipoteca.classList.add("erro")
        valor_hipoteca.nextElementSibling.nextElementSibling.classList.add("erro_icon")
        valor_hipoteca.nextElementSibling.style.visibility = "visible"

        ok = false
    }

    else
    {   

        valor_hipoteca.classList.remove("erro")
        valor_hipoteca.nextElementSibling.nextElementSibling.classList.remove("erro_icon")
        valor_hipoteca.nextElementSibling.style.visibility = "hidden"

        valor_hipoteca =  Number(valor_hipoteca.value)
        valor_hipoteca === 0 ? valor_hipoteca = 1 : valor_hipoteca = valor_hipoteca
        document.querySelector("#valor_inicial").value = valor_hipoteca.toFixed(2)

        ok = true
    }


    if(prazo.value == "" || ["e,E"].includes(prazo))
        {
            console.log("[Error]")
            prazo.classList.add("erro")
            prazo.nextElementSibling.nextElementSibling.classList.add("erro_icon")
            prazo.nextElementSibling.style.visibility = "visible"

            ok1 = false
        }
    
        else
        {   
            prazo.classList.remove("erro")
            prazo.nextElementSibling.nextElementSibling.classList.remove("erro_icon")
            prazo.nextElementSibling.style.visibility = "hidden"

            prazo = Number(prazo.value) 
            prazo === 0 ? prazo = 1 : prazo = prazo
            document.querySelector("#prazo_pagamento").value = prazo

            ok1 = true
        }

    
    if(taxa.value == "" || ["e,E"].includes(taxa))
        {
            console.log("[Error]")
            taxa.classList.add("erro")
            taxa.nextElementSibling.nextElementSibling.classList.add("erro_icon")
            taxa.nextElementSibling.style.visibility = "visible"

            ok2 = false
        }
    
        else
        {   
            taxa.classList.remove("erro")
            taxa.nextElementSibling.nextElementSibling.classList.remove("erro_icon")
            taxa.nextElementSibling.style.visibility = "hidden"

            taxa = Number(taxa.value)
            taxa === 0 ? taxa = 1 : taxa = taxa
            document.querySelector("#taxa").value = taxa

            ok2 = true
        }
    //[Error]

 
    for(var elem of rds )
    {   
        if(elem.checked)
        {   
            console.log("elem:" + elem)
            elem = elem.id
            campo_rds.querySelector(".error_text").style.visibility = "hidden"
            break
        }

        else 
        {
            elem = false
            campo_rds.querySelector(".error_text").style.visibility = "visible"
            console.log("tudo falso")
        }
    }

   

    if(ok && ok1 && ok2 && elem)//comparando se algum dos campos deu erro
    {
        standard.style.display = "none" 
        resultado.style.display = "block"
        tudo_ok = true
    }

    else 
    {
        tudo_ok = false
        console.log("não está ok!")
    }

  
    if(elem === "repayment" && tudo_ok)
        {   
            campo_rds.querySelector(".error_text").style.visibility = "hidden"
            
            prazo = prazo * 12
            taxa = taxa / 100
            
            let taxa_mensal = taxa / 12
            let pagamento_mensal = valor_hipoteca * taxa_mensal/(1-(1+taxa_mensal)**-prazo)
            let pagamento_total = pagamento_mensal * prazo
    
            console.log(`Elementos encontrados: ${valor_hipoteca}, ${prazo}, ${taxa}, ${taxa_mensal}; Pagamento mensal: ${pagamento_mensal.toFixed(2)}; Pagamento total ao longo do tempo: ${pagamento_total.toFixed(2)}`)

            document.querySelector("#valor_mensal > h2").innerHTML = "R$"+ pagamento_mensal.toFixed(2)
            document.querySelector("#valor_final > h3").innerHTML = "R$"+ pagamento_total.toFixed(2)
    
        }

    if(elem === "interest_only" && tudo_ok)    
    {
        campo_rds.querySelector(".error_text").style.visibility = "hidden"
        prazo = prazo * 12
        taxa = taxa / 100
        let taxa_mensal = taxa / 12
        let valor_mensal = valor_hipoteca * taxa_mensal
        let valor_total = valor_mensal * prazo

        document.querySelector("#valor_mensal > h2").innerHTML = "R$"+ valor_mensal.toFixed(2)
        document.querySelector("#valor_final > h3").innerHTML = "R$"+ valor_total.toFixed(2)
    }
    
    else 
    {
        console.log("diferente de todas as condições")
    }

})
