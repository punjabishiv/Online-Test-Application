import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SharedService } from "../../app/shared/shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any = [];
  current:number=1;
  max_questions:number=20;
  UserAnswer:string='';
  SavedUserAnswers=new Array(this.max_questions).fill('');
  ScoreArray = new Array(this.max_questions).fill(0);
  MarkedForReviewArray = new Array(this.max_questions).fill(0);
  NumberArray = [...Array(this.max_questions).keys()].map(i=>i+1);  //used map to start numbers from 1
  ProgressSpinnerValue = 0;
  
  MarkForReview(): void{
    this.MarkedForReviewArray[this.current-1]=!this.MarkedForReviewArray[this.current-1];
  }
  
  IncrementCurrent(): void{
    this.UserAnswer="";
    if (this.current<this.max_questions) {
    this.current = this.current + 1;
    }
  }

  DecrementCurrent(): void{
    this.UserAnswer="";
    if (this.current>1) {
    this.current = this.current - 1;
    }
  }

  GoToQuestion(x:number): void{
    this.current=x;
  }

  SaveAnswer(): void{
    this.SavedUserAnswers[this.current-1]=this.UserAnswer;

    if (this.UserAnswer===this.questions[this.current-1].answer) {
      this.ScoreArray[this.current-1]=1;
      console.log(this.ScoreArray);
    }
    else if (this.UserAnswer==="") {
      this.ScoreArray[this.current-1]=0;
      console.log(this.ScoreArray);
    }
    else {
      this.ScoreArray[this.current-1]=-1;
      console.log(this.ScoreArray);
    }
    var attempted=0;
    for (var i=0;i<this.ScoreArray.length;i++) {
      if (this.ScoreArray[i]!=0) {
        attempted+=1;
      }
    }
    this.ProgressSpinnerValue=attempted*(100/this.max_questions);
  }

  CalculateScore(): void{
    var sum=0;
    for (let i of this.ScoreArray) {
      sum+=i;
    }
    console.log("Score is:",sum);
  }

  ClearSelection(): void{
    this.UserAnswer="";
    this.SavedUserAnswers[this.current-1]=this.UserAnswer;
    this.SaveAnswer();
    this.ScoreArray[this.current-1]=0;
  }

  SumOfMarkedForReview(): number{
    var sum=0;
    for (let i of this.MarkedForReviewArray) {
      sum+=i;
    }
    return sum;
  }

  constructor(private httpClient: HttpClient, private shared:SharedService, private router: Router){}
  

  ngOnInit(): void {
    this.httpClient.get("./assets/data.json").subscribe(data =>{
      console.log(data);
      this.questions = data;
      this.shared.SendScoreArray(this.ScoreArray);
      

      setTimeout(() => {
        this.router.navigate(['/result']);
    }, 600000);

    })
  }
}

