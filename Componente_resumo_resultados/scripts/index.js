"use strict"

let array = [{nome: "Reaction", num: 80}, {nome:"Memory",num: 92}, {nome:"Verbal", num:61}, {nome:"Visual", num:73}]
let texts_results = [...document.querySelectorAll(".text_result")]
let nums_results =[...document.querySelectorAll(".num_result")]

let main_conteudo = document.getElementById("main_conteudo")
console.log(main_conteudo.children)

console.log(texts_results)
console.log(array)
console.log(array[0].nome)

texts_results.map((el,i)=>{
    el.innerHTML = array[i].nome 
})

nums_results.map((el,i)=>{
    el.innerHTML = `<strong>${array[i].num}</strong>` + " / 100"
})

//

// const arquivo_json = "https://cat0blu.github.io/Front-Mentor/Painel_controle_de_tempo/public/scripts/data.json"

// async function carregarJson()
// {
//     const resp = await fetch(arquivo_json)

//     if(resp.status === 200)
//     {   
//         // console.log(resp.json())
//         const obj =  await resp.json()
//         document.querySelector("#reaction").querySelector(".text_result").innerHTML = obj[0].title
//         let textess = [...document.querySelectorAll(".text_result")]
//         textess.map((el,i)=>{
//                el.innerHTML = obj[i].title 
//              })
//     }

//     else 
//     {
//         console.log("[Error]")
//     }

// }

// carregarJson()
