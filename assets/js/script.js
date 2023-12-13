
//questions and answers block that will be presented in the quiz web page.
var allQuestions=[ question1 = { question:"What does HTML stand for?",
 answers:["HyperText MarkUp Language", "Home Tool Markup Language","Hypertext machine Language",
 "Home To Make Lasagna"],
 answer:"HyperText MarkUp Language"},

  question2={ question:"Who is making the Web standards?",
 answers:["Google", "Microsoft", "Mozilla",
 "The World Wide Web Consortium"],
answer:"The World Wide Web Consortium"},


 question3={question:"Which of the following attributes is used to add link to any element?",
 answers:["href","ref","link", "newref"],
 answer:"href"},

 question4={question:"Which character is used to indicate an end tag?",
 answers:["*", "^", "<", "/"],
 answer:"/"}];



//elements that will be used for append
var wrapperEl=document.querySelector(".wrapper");
var startBtn=document.querySelector("#start");
var timeEl = document.querySelector(".time");
 var secondsLeft=40;
correctAnswer=0;
inCorrectAnswers=0;
index=1;

//time block displayed for the quiz to finish
 startBtn.onclick=function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft+ " seconds" ;
if(secondsLeft=== 39 ){
  
  firstQuestion();
  
}


if(secondsLeft === 0 ) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
        
            sendMessage();
          }
    },1000)
}


  function sendMessage(){
  
    alert("Your time is up!");
    timeEl.textContent=" ";
 
  }

function firstQuestion(){

//elements that will be created every time any button is clicked
var quizEl=document.createElement("div");
quizEl.setAttribute("class","quiz");
wrapperEl.append(quizEl);
var questionEl=document.createElement("h2");
questionEl.textContent=question1.question;
quizEl.appendChild(questionEl);
var answerDiv=document.createElement("div");
answerDiv.setAttribute("id","answer");
quizEl.appendChild(answerDiv);
var pEl=document.createElement("p");
 quizEl.appendChild(pEl);
 pEl.innerHTML="";


//creates answer options every time question is answered
  for(var i=0;i<allQuestions. length;i++){
var answerbBtn=document.createElement("button");
answerbBtn.setAttribute("class","btn");
answerbBtn.innerHTML=allQuestions[0].answers[i];
answerDiv.appendChild(answerbBtn);
  }

 
  
 
//if first option is clicked
answerDiv.children[0].addEventListener("click",function(){
 //if that option is the last question of the quiz

  if(questionEl.textContent===allQuestions[3].question){
timeEl.remove();
    inCorrectAnswers++;
    secondsLeft-=5;
    quizEl.remove();
   var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");

if(isOk==true){

createAForm(); 

document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
    e.preventDefault();
    alert("Thank you for participating!");
     wrapperEl.remove();
    secondsLeft=secondsLeft-60;

  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }

else{
  //collects correct and incorrect answers
  if(answerDiv.children[0].textContent===allQuestions[index-1].answer){
    correctAnswer++;


 }
  else if(!answerDiv.children[0].textContent===allQuestions[index-1].answer){
    inCorrectAnswers++;
    secondsLeft-=5;
  }

 
  
  questionEl.innerText=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  } 
  
  

}
    index++;

})
 

//if second option is clicked
answerDiv.children[1].addEventListener("click",function(){
//if that option is the last question of the quiz
  if(questionEl.textContent==allQuestions[3].question){
    timeEl.remove();
    secondsLeft-=5;
   inCorrectAnswers++;
  quizEl.remove();
    var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");
  
if(isOk==true){

createAForm(); 
document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
   
    e.preventDefault();

    alert("Thank you for participating!");
    wrapperEl.remove();
    secondsLeft=secondsLeft-60;

  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }


 else{
  //collects correct and incorrect answers
  if(answerDiv.children[1].textContent===allQuestions[index-1].answer){
    correctAnswer++;
    
   }
  else{
    inCorrectAnswers++;
    secondsLeft-=5;
  }

  questionEl.innerHTML=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  
 
  }

}
 
      index++;
 
    })

    
    // if third option is clicked
answerDiv.children[2].addEventListener("click",function(){
  //if that option is the last question of the quiz

  if(questionEl.textContent==question4.question){
    timeEl.remove();
  inCorrectAnswers++;
  secondsLeft-=5;
  
    quizEl.remove();
    var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");

  if(isOk==true){

createAForm();  

document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
    e.preventDefault();
    alert("Thank you for participating!");
    wrapperEl.remove();
    secondsLeft=secondsLeft-60;

  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }

//collects correct and incorrect answers
  if(answerDiv.children[2].textContent===allQuestions[index-1].answer){
    correctAnswer++;
   

    }  else{
    inCorrectAnswers++;
    secondsLeft-=5;
  
 
  questionEl.innerHTML=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  }

    }

      index++;

})



//if the last option is clicked
answerDiv.children[3].addEventListener("click",function(){
  //if that option is the last question of the quiz

  if(questionEl.textContent==question4.question){
    timeEl.remove();
    correctAnswer++;
  
    
      quizEl.remove();
      var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");
   
if(isOk==true){

createAForm();  

document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
    e.preventDefault();
    alert("Thank you for participating!");
    wrapperEl.remove();
    secondsLeft=secondsLeft-60;

  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }

//collects correct and incorrect answers
  if(answerDiv.children[3].textContent===allQuestions[index-1].answer){
    correctAnswer++;
   
   }
  else{
    inCorrectAnswers++;
    secondsLeft-=5;

  
  }
  
  questionEl.innerHTML=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  }
 


      index++;
 

})

}

 

//create a form to add my initials and submit when all the questions are answered.
function createAForm(){
  var myForm=document.createElement("form");
myForm.setAttribute("id","my-form");
  wrapperEl.append(myForm);
  var myInput=document.createElement("input");
  myInput.setAttribute("id","initials");
  myInput.setAttribute("placeholder","Type your initials");
  myInput.innerHTML="Type your initils."
  myForm.appendChild(myInput);
  var mySubmitBtn=document.createElement("button");
  mySubmitBtn.setAttribute("id","submit");
  mySubmitBtn.innerHTML="Submit";
  myForm.append(mySubmitBtn);
  var scoreDisplay=document.createElement("p");
  scoreDisplay.setAttribute("id","score");
  myForm.appendChild(scoreDisplay);
 scoreDisplay.innerHTML="Correct Answers: "+correctAnswer+ " and your score is: "+ correctAnswer*10;
 localStorage.setItem("Correct answer", scoreDisplay.innerHTML);

}







  


