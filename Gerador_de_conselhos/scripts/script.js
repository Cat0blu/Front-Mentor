const URL = 'https://api.adviceslip.com/advice'

var text_id = window.document.querySelector('#text_id')

var advice = window.document.querySelector('#ADVICE')

async function getApi()
{
    const resp = await fetch(URL)
    if(resp.status === 200)
    {
        const obj = await resp.json()

        text_id.innerHTML = 'ADVICE #'+obj.slip.id

        advice.innerHTML = '" '+obj.slip.advice +' "'
    }
}

getApi()