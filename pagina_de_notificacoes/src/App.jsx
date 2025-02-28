import { useState } from 'react';

function App() {

  function allread (){
    let elements = document.querySelectorAll('.campo_icon')
    let blocos = document.querySelectorAll('main > *')

    elements.forEach((element)=>{
      element.style.display = "none"
      document.querySelector("#num_notification").innerHTML = 0
    })

    blocos.forEach((bloco) =>{
      bloco.style.backgroundColor = 'white'
    })
  }

  function clickBloco00(){
    let bloco00 =document.querySelector('#bloco00')
    let pontRed = bloco00.querySelector('.campo_icon')
    let num_notification = document.querySelector('#num_notification')


    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco00.style.backgroundColor = 'white'
      }
    
  }
  
  function clickBloco01(){
    let bloco01 =document.querySelector('#bloco01')
    let pontRed = bloco01.querySelector('.campo_icon')
    let num_notification = document.querySelector('#num_notification')

    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco01.style.backgroundColor = 'white'
      }
  }
  
  function clickBloco02(){
    let bloco02 =document.querySelector('#bloco02')
    let pontRed = bloco02.querySelector('.campo_icon')
    let num_notification = document.querySelector('#num_notification')

    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco02.style.backgroundColor = 'white'
      }
    
  }
  
  function clickBloco03()
  {
    let msgText = document.querySelector("#msgText")
    let bloco03 =document.querySelector('#bloco03')
    let num_notification = document.querySelector('#num_notification')
    let pontRed = bloco03.querySelector('.campo_icon')
    

    if(msgText)
    {
      if(window.getComputedStyle(msgText).display === "none")
        {
          msgText.style.display = "block"
        }
    
        else 
        {
          msgText.style.display = "none"
        }
  
    }

   
    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco03.style.backgroundColor = 'white'
      }
   
  }

  function clickBloco04(){

    let bloco04 =document.querySelector('#bloco04')
    let pontRed = bloco04.querySelector('.campo_icon')
    let num_notification = document.querySelector('#num_notification')

    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco04.style.backgroundColor = 'white'
      }

  }

  function clickBloco05(){

    let bloco05 =document.querySelector('#bloco05')
    let pontRed = bloco05.querySelector('.campo_icon')
    let num_notification = document.querySelector('#num_notification')

    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco05.style.backgroundColor = 'white'
      }
    
  }

  function clickBloco06(){
    let bloco06 =document.querySelector('#bloco06')
    let pontRed = bloco06.querySelector('.campo_icon')
    let num_notification = document.querySelector('#num_notification')

    if(window.getComputedStyle(pontRed).display === "inline-block")
      {
        pontRed.style.display = 'none'
        num_notification.innerHTML = num_notification.innerHTML -1
        bloco06.style.backgroundColor = 'white'
      }
    
  }

  return ( 
  <div id='conteudo'>
    
    <header><div id='campo_notifica'>
      <p>Notifications </p>
      <span id='num_notification'>7</span>
    </div>  
    <span id='text_all_read' onClick={allread}>Mark all as read</span></header>
    
    <main>
      <div id='bloco00'onClick={clickBloco00}>
        <img src="src\imgs\avatar-mark-webber.webp" alt="img.webp" className='img_icon'/> 

        <p className="p_main"> <span className='campoText'><strong>Mark webber</strong> </span> reacted to your recent post 
        <strong> My first tournament today!</strong>

        <div className='campo_icon'><span className='icon_msg_unread'></span></div>
        <span className='tempo_msg'>1m ago</span>
        </p>
      </div>
      
      <div id='bloco01'onClick={clickBloco01}>
        <img src="src\imgs\avatar-angela-gray.webp" alt="img.webp" className='img_icon'/> 

        <p className="p_main"> <span className='campoText'><strong>Angela Gray</strong> </span> followed you
        <div className='campo_icon'><span className='icon_msg_unread'></span></div>

        <span className='tempo_msg'>5m ago</span>
        </p>
      </div>
      
      <div id='bloco02'onClick={clickBloco02}>
        <img src="src\imgs\avatar-jacob-thompson.webp" alt="img.webp" className='img_icon'/> 

        <p className="p_main"> <span className='campoText'><strong>Jacob Thompson</strong> </span> has joinede your group  

        <span className="textBlue">
           Chess Club
        </span>

        <div className='campo_icon'><span className='icon_msg_unread'></span></div>
        <span className='tempo_msg'>1 day ago</span>
        </p>

      </div>
    
      <div id='bloco03' onClick={clickBloco03}>
        <img src="src\imgs\avatar-rizky-hasanuddin.webp" alt="img.webp" className='img_icon'/> 

        <p className="p_main"> <span className='campoText'><strong>Rizky Hasanuddin</strong> </span> seint you a private massage

        <div className='campo_icon'><span className='icon_msg_unread'></span></div>

        <span className='tempo_msg'>5 day ago</span>
        </p>
      </div>
      <div id='msgText' >Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already heving lots of fun and improving my game.</div>

      <div id='bloco04'onClick={clickBloco04}>
        <div style={{display:'flex'}}>
          <img src="src\imgs\avatar-kimberly-smith.webp" alt="img.webp" className='img_icon'/>
          <p className="p_main"> <span className='campoText'><strong>Kimberly Smith</strong>
          </span> commented on your picture
          
          <div className='campo_icon'><span className='icon_msg_unread'></span></div>
          <span className='tempo_msg'>1m ago</span>
          </p>
        </div>

        <div className="bloco_img_coment"> <img src="src\imgs\image-chess.webp" alt="img.webp"  className="img_coment"/>
        </div>
      </div>

      <div id='bloco05'onClick={clickBloco05}>
        <img src="src\imgs\avatar-nathan-peterson.webp" alt="img.webp" className='img_icon'/> 

        <p className="p_main"> <span className='campoText'><strong>Nathan Peterson</strong> </span> rected to your recent post
        <strong> 5 end-game strategies to increase your win rate</strong>

        <div className='campo_icon'><span className='icon_msg_unread'></span></div>
        <span className='tempo_msg'>2 weeks ago</span>
        </p>
      </div>

      <div id='bloco06'onClick={clickBloco06}>
        <img src="src\imgs\avatar-anna-kim.webp" alt="img.webp" className='img_icon'/> 

        <p className="p_main"> <span className='campoText'><strong>Anna Kim</strong> </span> laft the group 

        <span className="textBlue">
           Chess Club
        </span>

        <div className='campo_icon'><span className='icon_msg_unread'></span></div>
        <span className='tempo_msg'>2 weeks ago</span>
        </p>
      </div>
      
    </main>
  </div>

  )
}

export default App
