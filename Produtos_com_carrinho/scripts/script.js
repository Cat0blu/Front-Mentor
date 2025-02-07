
var itens = window.document.querySelector('#Number')
var buttons = window.document.querySelectorAll('.main_button')
var text_carrinho = window.document.querySelectorAll('.text_carrinho')
var count = 0
var remover_carrinho = window.document.querySelectorAll('.remove')
var _titulos_produtos = window.document.querySelectorAll('.titulo_produto')
var total = window.document.querySelector('#carrinho #bloco_total #total')
var ilustracao = window.document.querySelector('#ilustracao')
var blocoCarbon = window.document.querySelector('#bloco_carbon_neutral')
var addRemove = window.document.querySelectorAll('.button_addRemove')
var buttonSubmit = window.document.querySelector('#button_submit')
var mensageCampo = window.document.querySelector('#mensagem_campo')
var main = window.document.querySelector('main')
var button_mensagemCampo = mensageCampo.querySelector(' button')
var produtosComprados = mensageCampo.querySelectorAll('.produtos_comprados')
var totalPc = window.document.querySelector('#totalCampo_Final #totalPc')


_titulos_produtos.forEach((titulo)=>{
 titulo.nextElementSibling.style.color = 'hsl(14, 86%, 42%)'
 titulo.nextElementSibling.style.marginBottom = '20px'
 titulo.nextElementSibling.style.fontWeight = 'bolder'
})

itens.innerHTML = count
buttons.forEach((button =>{
    button.addEventListener('click', () =>
{
    var titulo_produto = button.nextElementSibling.nextElementSibling.nextElementSibling
    text_carrinho.forEach((text)  =>{
       
        if(text.innerText === titulo_produto.innerText)  
        {   
            var bloco_carrinho = text.closest('.bloco_carrinho')
            var multiplicadorElemento = bloco_carrinho.querySelector('.multiplicador')
            var num_multiplicador = Number(multiplicadorElemento.innerHTML)//
            var produto = bloco_carrinho.querySelector('.produto')
            var somaProduto = bloco_carrinho.querySelector('.soma_produto')
            var div = button.closest('div')
            var buttonAddRemove = div.querySelector('.button_addRemove')
            
            buttonAddRemove.classList.remove('hidden')
            button.style.display = 'none'
            blocoCarbon.classList.remove('hidden')
            buttonSubmit.classList.remove('hidden')
            ilustracao.classList.add('hidden')
            total.closest('#bloco_total').classList.remove('hidden')
            
            bloco_carrinho.classList.remove('hidden')
            
            num_multiplicador += 1
            somaProduto.innerHTML = (Number(produto.innerHTML) * num_multiplicador).toFixed(2)//

            total.innerHTML = (Number(total.innerHTML) + Number(produto.innerHTML)).toFixed(2)

            multiplicadorElemento.innerHTML = num_multiplicador
            buttonAddRemove.querySelector('p').innerHTML = num_multiplicador

            count += 1
            itens.innerHTML = count

            produtosComprados.forEach((one_produto) =>{
                var tituloPc = one_produto.querySelector('.titulo_pc')
                var multiplicadorPc = one_produto.querySelector('.multiplicador_pc')
                
                if(tituloPc.innerText === text.innerText)
                {
                    one_produto.style.display = 'flex'
                    multiplicadorPc.innerHTML =  num_multiplicador
                    one_produto.querySelector('.totalProduto_MensagemCampo').innerHTML = '$'+ Number(text.closest('.bloco_carrinho').querySelector('.soma_produto').innerHTML).toFixed(2) 
                }
            })
        }
    })
})
}))

remover_carrinho.forEach((remover)=>{
    remover.addEventListener('click', ()=>{

        var bloco_carrinho = remover.closest('.bloco_carrinho')
        var multiplicadorElemento = bloco_carrinho.querySelector('.multiplicador')
        var tituloProduto = window.document.querySelectorAll('.titulo_produto')
        var text_carrinho = bloco_carrinho.querySelector('.text_carrinho')
        var somaProduto = remover.closest('.bloco_carrinho').querySelector('.produto')
        
        count -= multiplicadorElemento.innerHTML
        multiplicadorElemento.innerHTML -= multiplicadorElemento.innerHTML
        itens.innerHTML = count
        
        bloco_carrinho.classList.add('hidden')
        
        total.closest('#bloco_total').classList.remove('hidden')
        
        tituloProduto.forEach((produto) =>{
            if(produto.innerText === text_carrinho.innerText)
            {  
                var bnt_removeadd = produto.closest('div').querySelector('.button_addRemove')
                produto.closest('div').querySelector('.main_button').style.display = 'block'
                bnt_removeadd.classList.add('hidden')
                bnt_removeadd.querySelector('p').innerHTML = 0
                total.innerHTML = (Number(total.innerHTML) - Number(somaProduto.innerHTML)).toFixed(2)
            }

            if(count ===0)
            {   
                ilustracao.classList.remove('hidden')
                blocoCarbon.classList.add('hidden')
                buttonSubmit.classList.add('hidden')
                total.closest('#bloco_total').classList.add('hidden')
            }

            produtosComprados.forEach((one_produto) =>{
                var tituloPc = one_produto.querySelector('.titulo_pc')
                var multiplicadorPc = one_produto.querySelector('.multiplicador_pc')
                var num_multiplicador = Number(multiplicadorPc.innerHTML)
                if(tituloPc.innerText === text_carrinho.innerText)
                {
                    one_produto.style.display = 'none'
                    multiplicadorPc.innerHTML -= multiplicadorPc.innerHTML
                }
            })
        })
    })
})

//buttonAddRemove
addRemove.forEach((oneButton) =>{
    var buttonMais = oneButton.querySelector('.mais')
    var buttonMenos = oneButton.querySelector('.menos')
    var tituloProduto = oneButton.closest('div').querySelector('.titulo_produto')
    var textCarrinho = window.document.querySelectorAll('.text_carrinho')

    textCarrinho.forEach((oneText) =>{
        
        buttonMais.addEventListener('click', ()=>{
            if(tituloProduto.innerText === oneText.innerText)
            {
                var p = buttonMais.closest('.button_addRemove').querySelector('p')
                var blocoCarrinho = oneText.closest('.bloco_carrinho')
                var multiplicador = blocoCarrinho.querySelector('.multiplicador')
                var num_multiplicador = Number(multiplicador.innerHTML)
                var produto = blocoCarrinho.querySelector('.produto')
                var somaProduto = blocoCarrinho.querySelector('.soma_produto')
            
                num_multiplicador +=1
                multiplicador.innerHTML = num_multiplicador
                p.innerHTML = num_multiplicador
                count +=1
                itens.innerHTML = count
                somaProduto.innerHTML = (Number(produto.innerHTML) * num_multiplicador).toFixed(2)
                total.innerHTML = (Number(total.innerHTML) + Number(produto.innerHTML)).toFixed(2)

                produtosComprados.forEach((one_produto) =>{
                    var tituloPc = one_produto.querySelector('.titulo_pc')
                    var multiplicadorPc = one_produto.querySelector('.multiplicador_pc')
                    var somaProduto = one_produto.querySelector('.totalProduto_MensagemCampo')
                    var produtoValor = multiplicadorPc.nextElementSibling
                    var multiplicar = produtoValor.innerHTML * num_multiplicador
                    if(tituloPc.innerText === oneText.innerText)
                    {   
                        one_produto.style.display = 'flex'
                        multiplicadorPc.innerHTML = num_multiplicador
                        somaProduto.innerHTML = '$' + multiplicar.toFixed(2)
                    }
                })
            }
        })

        buttonMenos.addEventListener('click', ()=>{

            if(tituloProduto.innerText === oneText.innerText)
            {
                var p = buttonMais.closest('.button_addRemove').querySelector('p')
                var blocoCarrinho = oneText.closest('.bloco_carrinho')
                var multiplicador = blocoCarrinho.querySelector('.multiplicador')
                var num_multiplicador = Number(multiplicador.innerHTML)
                var produto = blocoCarrinho.querySelector('.produto')
                var somaProduto = blocoCarrinho.querySelector('.soma_produto')

                num_multiplicador -=1
                multiplicador.innerHTML = num_multiplicador
                p.innerHTML = num_multiplicador
                count -=1
                itens.innerHTML = count
                somaProduto.innerHTML = (Number(produto.innerHTML) * num_multiplicador).toFixed(2)
                total.innerHTML = (Number(total.innerHTML) - Number(produto.innerHTML)).toFixed(2)

                if(num_multiplicador < 1)
                {
                    blocoCarrinho.classList.add('hidden')
                    multiplicador.innerHTML = 0
                    oneButton.classList.add('hidden')
                    oneButton.previousElementSibling.style.display = 'block'
                }

                if(count === 0)
                {
                    ilustracao.classList.remove('hidden')
                    blocoCarbon.classList.add('hidden')
                    buttonSubmit.classList.add('hidden')
                    total.closest('#bloco_total').classList.add('hidden')
                }

                produtosComprados.forEach((one_produto) =>{
                    var tituloPc = one_produto.querySelector('.titulo_pc')
                    var multiplicadorPc = one_produto.querySelector('.multiplicador_pc')
                    var somaProduto = one_produto.querySelector('.totalProduto_MensagemCampo')
                    
                    var produtoValor = multiplicadorPc.nextElementSibling
                    var multiplicar = produtoValor.innerHTML * num_multiplicador

                    somaProduto.innerHTML = '$' + multiplicar.toFixed(2)
            
                    if(tituloPc.innerText === oneText.innerText)
                    {
                        multiplicadorPc.innerHTML = num_multiplicador
                    }

                    if(multiplicadorPc < 1)
                    {   
                        one_produto.style.display = 'none'
                    }
                })
            }
        })
    })
})

buttonSubmit.addEventListener("click", ()=>{
    mensageCampo.style.display = 'block'
   main.style.pointerEvents = 'none'
   totalPc.innerHTML = '$'+ total.innerHTML
   
})

button_mensagemCampo.addEventListener('click', ()=>{
    mensageCampo.style.display = 'none'
    main.style.pointerEvents = 'auto'
    location.reload()
   
})