"use strict"

const array_button = [...document.querySelectorAll("#cmp_circu_num .circu_num")]
const button_submit = document.querySelector("#btn_submit")
let resul_avaliacao = document.querySelector("#result_avaliacao")
let cmp00 = document.querySelector("#cmp00")
let cmp01 = document.querySelector("#cmp01")

array_button.map((button)=>{
    button.addEventListener("click", ()=>{
        console.log(button.innerHTML)
       
        button.classList.add("clickado")
        array_button.map((bnt)=>{
            if(bnt.innerHTML !== button.innerHTML)
            {
                bnt.classList.remove("clickado")
            }
       })
    
        resul_avaliacao.innerHTML = `You slected ${button.innerHTML} out of 5`
    })
})


button_submit.addEventListener("click", ()=>{
    cmp00.style.display = "none"
    cmp01.style.display = "flex"
})