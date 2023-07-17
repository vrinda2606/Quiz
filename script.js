const startButton = document.querySelector('.start-btn');
const popup = document.querySelector('.popup');
const exitButton = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueButton= document.querySelector('.continue-btn');
const quiz = document.querySelector('.quiz-section');

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
}