const startButton = document.querySelector('.start-btn');
const popup = document.querySelector('.popup');
const exitButton = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueButton= document.querySelector('.continue-btn');
const quiz = document.querySelector('.quiz-section');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const  nextBtn = document.querySelector('.next-btn');
const quizOptions=document.querySelector('.quiz-options');
const result = document.querySelector('.result');
const tryBtn = document.querySelector('.tryagain-btn');
const homeBtn = document.querySelector('.home-btn');

startButton.onclick = () => {
    popup.classList.add('active');
    main.classList.add('active');
}
exitButton.onclick =() => {
    popup.classList.remove('active');
    main.classList.remove('active');
}
continueButton.onclick= () => {
    quiz.classList.add('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQues(0);
    quesCounter(1);
    headerScore();
}
tryBtn.onclick =() => {
    quizBox.classList.add('active');
    result.classList.remove('active');
    nextBtn.classList.remove('active');
    
    quesCnt = 0;
    score=0;
    showQues(quesCnt);
    quesCounter(quesCnt+1);

    headerScore();
}
homeBtn.onclick = () => {
    quizSection.classList.remove('active');
    result.classList.remove('active');
    nextBtn.classList.remove('active');
    
    quesCnt = 0;
    score=0;
    showQues(quesCnt);
    quesCounter(quesCnt+1);

}


let  quesCnt = 0;
let score=0;

nextBtn.onclick= () => {
    if(quesCnt < questions.length - 1){
    quesCnt++;
    
    showQues(quesCnt);
    quesCounter(quesCnt+1);

    nextBtn.classList.remove('active');
    }
    else{
        showResult();
    }
}

//ques from array with options

function showQues(index){
    const quesText = document.querySelector('.ques-text');
    quesText.textContent = `${questions[index].num}. ${questions[index].question}`;

    let optionTag = `<div class="options"><span>${questions[index].options[0]}</span></div>
    <div class="options"><span>${questions[index].options[1]}</span></div>
    <div class="options"><span>${questions[index].options[2]}</span></div>
    <div class="options"><span>${questions[index].options[3]}</span></div>`;

    quizOptions.innerHTML = optionTag;

    const option = document.querySelectorAll('.options');
    for(let i=0;i<option.length ; i++)
    {
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

function optionSelected(ans){
    let userAns = ans.textContent;
    let correctAns = questions[quesCnt].answer;
    let allOptions = quizOptions.children.length;
    
    if(userAns == correctAns){
        ans.classList.add('correct');
        score++;
        headerScore();
    }
    else{
        ans.classList.add('incorrect');
        for(let i=0;i<allOptions;i++){
            if(quizOptions.children[i].textContent == correctAns)
            {
                quizOptions.children[i].setAttribute('class','options correct');
            }
        }
    }

    //if user selects anything disable rest 
    for(let i=0;i<allOptions;i++)
    {
        quizOptions.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
    
}

function quesCounter(index){
    const totalQues = document.querySelector('.ques-total');
    totalQues.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
     const headerScoreText = document.querySelector('.header-score');
     headerScoreText.textContent = `Score: ${score} / ${questions.length}`;
}

function showResult(){
    quizBox.classList.remove('active');
    result.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;

    const progress = document.querySelector('.progress');
    const progressVal = document.querySelector('.progress-value');
    let progStartVal = -1;
    let progEndVal = (score/questions.length)*100;
    let speed=20;
    let prog = setInterval( () => {
        progStartVal++;
        
        progressVal.textContent = `${progStartVal}%`;
        progress.style.background = `conic-gradient(#4b00c4 ${progStartVal *3.6}deg,rgba(255,255,255,.1) 0deg)`;

        if(progStartVal == progEndVal){
            clearInterval(prog);
        }
    },speed)
}
