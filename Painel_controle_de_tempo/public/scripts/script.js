
var opcao_geradorTempo = window.document.querySelectorAll('#header_body p')

var NewWorkValue = window.document.querySelector('#work_value')
var BeforeWorkValue = window.document.querySelector('#value_before_work')

var NewPlayValue = window.document.querySelector('#play_value')
var BeforePlayValue = window.document.querySelector('#value_before_play')

var NewStudyValue = window.document.querySelector('#study_value')
var BeforeStudyValue = window.document.querySelector('#value_before_study')

var NewExerciseValue = window.document.querySelector('#exercise_value')
var BeforeExerciseValue = window.document.querySelector('#value_before_exercise')

var NewSocialValue = window.document.querySelector('#social_value')
var BeforeSocialValue = window.document.querySelector('#value_before_social')

var NewSelfCareValue = window.document.querySelector('#selfCare_value')
var BeforeSelfCareValue = window.document.querySelector('#value_before_selfCare')


//logica relacionada ao opcao_geradorTempo//
opcao_geradorTempo.forEach((opcao) =>{
  
  opcao.addEventListener('click', ()=>{
    opcao.style.opacity = '1'
    
    jsonTarefas(periodo = opcao.innerHTML.toLocaleLowerCase())
    
    
    if(opcao.previousElementSibling)
    { 
      opcao.previousElementSibling.style.opacity = '0.6'
      var antes = opcao.previousElementSibling
      if(antes.previousElementSibling)
      {
        antes.previousElementSibling.style.opacity = '0.6'
      }
    }

    if(opcao.nextElementSibling)
    {
      opcao.nextElementSibling.style.opacity = '0.6'
      var depois = opcao.nextElementSibling
      if(depois.nextElementSibling)
      {
        depois.nextElementSibling.style.opacity = '0.6'
      }
    }
  })
})


function jsonTarefas(periodo="daily")
{
fetch('https://github.com/Cat0blu/Front-Mentor/blob/main/Painel_controle_de_tempo/public/scripts/data.json')//servidor local não configurado para suporte à https
.then((response) =>{
  if(!response.ok)
  {
    throw new Error('[Erro] ao carregar o arquivo Json')
  }
  return response.json()
})

.then((data)=>{
  window.console.log('arquivo:', data)//visualização online de json
  const workData = data.find((item) =>  {
    return item.title === "Work"})
  const workValue = workData ? workData.timeframes[periodo].current : null
  const workBeforeValue = workData ? workData.timeframes[periodo].previous : null
  NewWorkValue.innerHTML = workValue + "hrs"
  BeforeWorkValue.innerHTML = "Last Week -" + workBeforeValue + "hrs"


  const playData = data.find((item) =>  {
    return item.title === "Play"})
  const playValue = playData ? playData.timeframes[periodo].current : null
  const playBeforeValue = playData ? playData.timeframes[periodo].previous : null
  NewPlayValue.innerHTML = playValue + "hrs"
  BeforePlayValue.innerHTML = "Last Week -" + playBeforeValue + "hrs"

  const studyData = data.find((item) =>  {
    return item.title === "Study"})
  const studyValue = studyData ? studyData.timeframes[periodo].current : null
  const studyBeforeValue = studyData ? studyData.timeframes[periodo].previous : null
  NewStudyValue.innerHTML = studyValue + "hrs"
  BeforeStudyValue.innerHTML = "Last Week -" + studyBeforeValue + "hrs"

  const exerciseData = data.find((item) =>  {
    return item.title === "Exercise"})
  const exerciseValue = exerciseData ? exerciseData.timeframes[periodo].current : null
  const exerciseBeforeValue = exerciseData ? exerciseData.timeframes[periodo].previous : null
  NewExerciseValue.innerHTML = exerciseValue + "hrs"
  BeforeExerciseValue.innerHTML = "Last Week -" + exerciseBeforeValue + "hrs"

  const socialData = data.find((item) =>  {
    return item.title === "Social"})
  const socialValue = socialData ? socialData.timeframes[periodo].current : null
  const socialBeforeValue = socialData ? socialData.timeframes[periodo].previous : null
  NewSocialValue.innerHTML = socialValue + "hrs"
  BeforeSocialValue.innerHTML = "Last Week -" + socialBeforeValue + "hrs"

  const selfCareData = data.find((item) =>  {
    return item.title === "Self Care"})
  const selfCareValue = selfCareData ? selfCareData.timeframes[periodo].current : null
  const selfCareBeforeValue = selfCareData ? selfCareData.timeframes[periodo].previous : null
  NewSelfCareValue.innerHTML = selfCareValue + "hrs"
  BeforeSelfCareValue.innerHTML = "Last Week -" + selfCareBeforeValue + "hrs"
})

.catch((error) =>{
  console.error('Erro ao caregar o json:', error)
})

}

jsonTarefas()

