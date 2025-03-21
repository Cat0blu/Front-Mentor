"use strict"

let root = document.querySelector("#root")
let conteudo_main = document.querySelector("#conteudo_main")

console.log(document.getRootNode())

const img_main = document.createElement("img")
img_main.setAttribute("src", "imgs/image-header_1.jpg")
img_main.setAttribute("id", "img_main")

const text_main = document.createElement("h1")
text_main.innerHTML = "Get <span id='textSublinhado'>insights</span> that help your business grow."

const p_main = document.createElement("p")
p_main.setAttribute("id", "p_main")
p_main.innerHTML = "Discover the benefits of data analytics and make better decisions ragarding revenue, customer experience, and overall efficiency."

const bloco_values = document.createElement("div")
bloco_values.setAttribute("id","bloco_values")
bloco_values.innerHTML = "<div><p class='value'>10k+</p> <p class='text'>COMPANIES</p></div> <div><p class='value'>314</p> <p class='text'>TEMPLATES</p></div> <div><p class='value'>12M+</p> <p class='text'>QUERIES</p></div>"

root.prepend(img_main)
conteudo_main.appendChild(text_main)
conteudo_main.appendChild(p_main)
conteudo_main.appendChild(bloco_values)