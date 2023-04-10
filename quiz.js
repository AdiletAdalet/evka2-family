const mySound2 = document.getElementById("sound2");

function playSoundAlert(){
    mySound2.play();
    mySound2.volume = 0.5;
    alert("Bunu Yapmaya Üşendim Bilader")
}





function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Quiz prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

//Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;

    
}

//Quiz Protottype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

//Quiz guess 
Quiz.prototype.guess = function(answer){
    let question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;

}

let q1 = new Question("Ailenin en salaği kimdir?", ["Mahir","Kelek","Şükrü","Can"],"Şükrü");
let q2 = new Question("Ailenin en guclusu kimdir?", ["Can","Sukru","Adilet","Baris"],"Baris");
let q3 = new Question("Ailenin en zekisi kimdir", ["Ahmet","Mahir","Adilet","Baris"],"Adilet");
let q4 = new Question("Ailenin en sportifi kimdir?", ["Can","Ahmet","Mahir","Baris"],"Ahmet");
let q5 = new Question("Ailenin en karizmasi kimdir?", ["Mahir","Kelek","Ahmet","Sukru"],"Kelek");
let q6 = new Question("Neyli milkshake icersin?", ["Cikolata","Vanilya","Cilek","Muz"],"Cilek");
let q7 = new Question("En iyi araba suren kimdir?", ["Can","Sukru","Kelek","Baris"],"Kelek");
let q8 = new Question("Ailenin marjinali kimdir?", ["Can","Sukru","Ahmet","Baris"],"Ahmet");
let q9 = new Question("Futboldan en iyi anlayan kimdir?", ["Can","Mahir","Kelek","Ahmet"],"Mahir");
let q10 = new Question("Gelecegimizi nasil goruyorsun", ["Sekiz bes","Zengin","Fakir ama mutlu","Boss"],"Boss");

let questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];



//Start quiz

let quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        let question = quiz.getQuestion();
        let choices = question.choices;
        document.querySelector("#question").textContent = question.text;

        for(let i=0; i<choices.length; i++){
            let element = document.querySelector("#choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i,choices[i]);
        }

        showProgress();

    }


}

function guess(id,guess){
    let btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
}


function showScore(){
    let html = `<h2>SKOR</h2><h2>${quiz.score}</h2>`;

    document.querySelector(".quiz_body").innerHTML = html;
    if(quiz.score === 0){
        alert("Aminakodumun salagi, Aptal Pic siktir git kapa siteyi")
    }
    else if(quiz.score>0 && quiz.score<=3){
        alert("Cok kotu degildin bilader ama calisman lazim")
    }
    else if(quiz.score>3 && quiz.score<=6){
        alert("Ortalama yaptin la helal")
    }
    else if(quiz.score>6 && quiz.score<=9){
        alert("Bu ailenin en parlaklarindan olabilirsin blder")
    }
    else if(quiz.score>9){
        alert("Sen bu Ailenin Dominic Toretto'susun. Basimizdan eksik olma")
    }
}

function showProgress(){
    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex+1;
    document.querySelector("#progress").innerHTML = "Soru" + " " + questionNumber + " / " + totalQuestion;
}

