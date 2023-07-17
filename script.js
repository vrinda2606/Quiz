const startButton = document.querySelector('.start-btn');
const popup = document.querySelector('.popup');
const exitButton = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueButton= document.querySelector('.continue-btn');
const quiz = document.querySelector('.quiz-section');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

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
}



let  quesCnt = 0;
const  nextBtn = document.querySelector('.next-btn');

nextBtn.onclick= () => {
    quesCnt++;
    showQues(quesCnt);
}

const quizOptions=document.querySelector('.quiz-options');

//ques from array with options

function showQues(index){
    const quesText = document.querySelector('.ques-text');
    quesText.textContent = `${questions[index].num}. ${questions[index].question}`;

    let optionTag = `<div class="options"><span>${questions[index].options[0]}</span></div>`;
}
