"use strict"

let array = [{nome: "Reaction", num: 80}, {nome:"Memory",num: 92}, {nome:"Verbal", num:61}, {nome:"Visual", num:73}]
let texts_results = [...document.querySelectorAll(".text_result")]
let nums_results =[...document.querySelectorAll(".num_result")]


const arquivo_json = "https://cat0blu.github.io/Front-Mentor/Componente_resumo_resultados/scripts/data.json"

async function carregarJson()
{
    const resp = await fetch(arquivo_json)

try {
    if(resp.status === 200)
        {   
            const obj =  await resp.json()
            document.querySelector("#reaction").querySelector(".text_result").innerHTML = obj[0].title

            console.log("rodando aplicação com arquivo .json")

            texts_results.map((el,i)=>{
                   el.innerHTML = obj[i].category
                 })
    
            nums_results.map((el,i)=>{
                el.innerHTML = `<strong>${obj[i].score}</strong>` + " / 100"
            })     
        }
    
        else 
        {
            console.log("[Error] deve ter havido um  [Erro-404] ao fazer a requisição")
        }
   
}

catch 
{
   console.log("Não foi possivel rodar a aplicação com o arquivo .json")
    texts_results.map((el,i)=>{
        el.innerHTML = array[i].nome 
    })

    nums_results.map((el,i)=>{
        el.innerHTML = `<strong>${array[i].num}</strong>` + " / 100"
    })
}
    
}

carregarJson() 

