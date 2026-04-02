// Example quiz logic
const quizContainer=document.getElementById('quiz');
const submitBtn=document.getElementById('submit');
function loadQuiz(questions){
  quizContainer.innerHTML='';
  questions.forEach((q,i)=>{
    let div=document.createElement('div');
    div.innerHTML=`<p>${i+1}. ${q.question}</p>`+
      q.options.map(opt=>`<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`).join('<br>');
    quizContainer.appendChild(div);
  });
}
