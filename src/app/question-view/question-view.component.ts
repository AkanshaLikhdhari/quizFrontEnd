import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz-service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {

  ngOnInit() {
  
	  this.getQuizQuestions(); 
  
 }
 
  constructor(private quizService:QuizService){
  }
  
  activeQuiz:boolean = false;
  resultActive:boolean = false;
  numCorrect:number = 0;
  correctAnswer:any = [];
  quizQuestion:any = [];
  activeQuestion:number = 0;
  question:any;
  quest:any;
  allPossibleAnswer:any;
  totalQuestionAnswered=0;
  error = false;
  finlize = false;
  correctAnswers:any;
  totalNumOfQuestion:any;
   no=[1,2,3,4,5];
  
  //returns quiz list
  public getQuizQuestions():any{
    this.quizService.getQuizQuestion().subscribe((resp)=>{
          this.quizQuestion = resp;
          this.activeQuestion = 0;
          this.question = this.quizQuestion;
          this.quest = this.quizQuestion[this.activeQuestion];
          this.allPossibleAnswer = this.quizQuestion[this.activeQuestion].quizOption;
          this.totalQuestionAnswered = 0;
          this.error = false;
          this.finlize = false;
         
          this.totalNumOfQuestion = this.quizQuestion.length;
         
    })
  }
  
  //activates quiz
  public quizActivate(){
         
         this.activeQuiz = this.changeState("quiz",true);
         console.log("inside quiz active..." +this.activeQuiz);
       };
	   
	   //Determines whether to show result or questions
	   public changeState(metric,state){		
         if(metric === "quiz"){
           return this.activeQuiz = state;
         }
         else if(metric === "result"){
           return this.resultActive = state;
         }
         else{
           return false;
         }
       };
	   
	   //select answer
	    public selectAnswer(index){
         this.quizQuestion[ this.activeQuestion].selected = index;
           
       };
	   
	   // capturing answers
	    public questionAnswered(){
         var quizLength = this.quizQuestion.length;
         console.log(quizLength);
         
         if(this.quizQuestion[this.activeQuestion].selected !== null){
           this.totalQuestionAnswered++;	
           if(this.totalQuestionAnswered>= quizLength){
 
             for(var i = 0; i < quizLength; i++){
 
               if(this.quizQuestion[i].selected === null){
                 this.setActiveQuestion(i);
                 return;
               }	
             }
             this.error = false;
             this.finlize = true;
             return;
           }	
         }
          this.setActiveQuestion(undefined);
          this.quest = this.quizQuestion[ this.activeQuestion];
          this.allPossibleAnswer = this.quizQuestion[ this.activeQuestion].quizOption;
         
       }
	   
	   //FOR CHECKING WHICH ARE THE QUESTION THAT ARE NOT ANSWERED
	    public setActiveQuestion(index){
         if(index === undefined){
         var breakOut = false;
         var quizLength = this.quizQuestion.length - 1;
         while(!breakOut){
           this.activeQuestion = (this.activeQuestion)<quizLength?++(this.activeQuestion):0;
           if(this.activeQuestion === 0){
             this.error = true;
           }
           if(this.quizQuestion[this.activeQuestion].selected === null){
             breakOut = true;
           }
           }
         }
         else{
            this.activeQuestion = index;
            this.quest = this.quizQuestion[ this.activeQuestion];
            this.allPossibleAnswer = this.quizQuestion[ this.activeQuestion].quizOption;
           
         }
       }
	   
	   //Final submitting the all answer
	    public finalAnswer(){
         alert("Final Submit?");
          this.finlize = false;
          this.activeQuestion = 0;
          this.totalQuestionAnswered = 0;
           this.markQuiz();
           this.quest =  this.quizQuestion[this.activeQuestion];
           console.log(this.quest);
          this.allPossibleAnswer =  this.quizQuestion[ this.activeQuestion].quizOption;
          console.log(this.allPossibleAnswer);
          this.activeQuiz =  this.changeState("quiz",false);
          this.resultActive =  this.changeState("result",true);
       };
	   
	   quizUserAnswer:any = [];
	
	   public markQuiz(){
         for(var i=0;i<this.quizQuestion.length;i++){
          
           let jsonStr = {
              optionId:this.quizQuestion[i].quizOption[this.quizQuestion[i].selected].optionId,
              questionId:this.quizQuestion[i].quizOption[this.quizQuestion[i].selected].questionId,
              correctOptionId:this.quizQuestion[i].correctOptionId
           }
           this.quizUserAnswer.push(jsonStr);

           
         }

    for(var i=0;i<this.quizUserAnswer.length;i++){
      if(this.quizUserAnswer[i].correctOptionId === this.quizUserAnswer[i].optionId){
        this.numCorrect++;
      }
    }

	   }
	   
	   //returns no of correct answers
	   correctAnsOutOfQuestion = function(){
         return ( this.numCorrect);
       }
	   
}
