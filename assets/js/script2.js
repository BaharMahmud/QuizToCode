
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




var wrapperEl=document.querySelector(".wrapper");
var startBtn=document.querySelector("#start");
var timeEl = document.querySelector(".time");
 var secondsLeft=30;
correctAnswer=0;
inCorrectAnswers=0;
index=1;


 startBtn.onclick=function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft+ " seconds" ;
if(secondsLeft=== 29 ){
  
  firstQuestion();
  
}

if(secondsLeft === 0) {
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

  for(var i=0;i<allQuestions. length;i++){
var answerbBtn=document.createElement("button");
answerbBtn.setAttribute("class","btn");
answerbBtn.innerHTML=allQuestions[0].answers[i];
answerDiv.appendChild(answerbBtn);
  }

 
  
 

answerDiv.children[0].addEventListener("click",function(){
  
  if(questionEl.textContent===allQuestions[3].question){
    inCorrectAnswers++;
    pEl.innerHTML="Wrong";
    timeEl.textContent=-10;
    quizEl.remove();
   var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");

if(isOk==true){

createAForm();  
document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
    e.preventDefault();
    alert("Thank you for participating!");
  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }

else{
  if(answerDiv.children[0].textContent===allQuestions[index-1].answer){
    correctAnswer++;
    pEl.innerHTML="Correct";

 }
  else if(!answerDiv.children[0].textContent===allQuestions[index-1].answer){
    inCorrectAnswers++;
    
    pEl.innerHTML="Wrong";
  }

 
  
  questionEl.innerText=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  } 
  
  

}
    index++;

})
 


answerDiv.children[1].addEventListener("click",function(){

  if(questionEl.textContent==allQuestions[3].question){
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
  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }


 else{
  if(answerDiv.children[1].textContent===allQuestions[index-1].answer){
    correctAnswer++;
    pEl.innerHTML="Correct";
   }
  else{
    inCorrectAnswers++;
    pEl.innerHTML="Wrong";
  }

  questionEl.innerHTML=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  
 
  }

}
 
      index++;
 
    })

answerDiv.children[2].addEventListener("click",function(){
  if(questionEl.textContent==question4.question){
  inCorrectAnswers++;
  pEl.innerHTML="Wrong";
  
    quizEl.remove();
    var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");

  if(isOk==true){

createAForm();  
document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
    e.preventDefault();
    alert("Thank you for participating!");
  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }


  if(answerDiv.children[2].textContent===allQuestions[index-1].answer){
    correctAnswer++;
    pEl.innerHTML="Correct";

    }  else{
    inCorrectAnswers++;
    pEl.innerHTML="Wrong";
  
 
  questionEl.innerHTML=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  }

    }

      index++;

})




answerDiv.children[3].addEventListener("click",function(){
  if(questionEl.textContent==question4.question){
    correctAnswer++;
    pEl.innerHTML="Correct";
    
      quizEl.remove();
      var isOk=confirm("Thank you for answering all the questions. Would you like to see your score?");
   
if(isOk==true){

createAForm();  
document.querySelector("#my-form").addEventListener(
  "submit",
  (e)=>{
    e.preventDefault();
    alert("Thank you for participating!");
  }
)
   
}

else{
  alert("You information hasn't saved."
  )
}



  }


  if(answerDiv.children[3].textContent===allQuestions[index-1].answer){
    correctAnswer++;
    pEl.innerHTML="Correct";
   }
  else{
    inCorrectAnswers++;
    pEl.innerHTML="Wrong";
  
  }
  
  questionEl.innerHTML=allQuestions[index].question;
  for(var i=0;i<allQuestions[index].answers.length;i++){
    answerDiv.children[i].innerHTML=allQuestions[index].answers[i];
  }
 


      index++;
 

})

}

 


function createAForm(){
  var myForm=document.createElement("form");
myForm.setAttribute("id","my-form");
  wrapperEl.append(myForm);
  var myInput=document.createElement("input");
  myInput.setAttribute("id","initials");
  myInput.innerHTML="Type your initils."
  myForm.appendChild(myInput);
  var mySubmitBtn=document.createElement("button");
  mySubmitBtn.setAttribute("id","submit");
  mySubmitBtn.innerHTML="Submit";
  myForm.append(mySubmitBtn);


}






setTime();
  


