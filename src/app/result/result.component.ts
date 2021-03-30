import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  SavedUserAnswers: any;
  questions: any;
  ScoreArray: any;
  attempted=0;
  unattempted=0;
  correctanswers=0;
  wronganswers=0;
  score=0;

  SpinnerAttempted=0;
  SpinnerUnattempted=0;
  SpinnerCorrect=0;
  SpinnerWrong=0;
  SpinnerScore=0;

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.ScoreArray = this.shared.ReceiveScoreArray();
    this.score = this.ScoreArray.reduce((a: any, b: any) => a + b, 0);
    for (let i=0;i<this.ScoreArray.length;i++) {
      if (this.ScoreArray[i] == -1) {
        this.wronganswers+=1;
      }

      else if (this.ScoreArray[i] == 0) {
        this.unattempted+=1;
      }

      else if (this.ScoreArray[i] == 1) {
        this.correctanswers+=1;
      }
    }

    this.SpinnerAttempted=(this.ScoreArray.length-this.unattempted)*(100/this.ScoreArray.length);
    this.SpinnerUnattempted=(this.unattempted)*(100/this.ScoreArray.length);
    this.SpinnerCorrect=(this.correctanswers)*(100/this.ScoreArray.length);
    this.SpinnerWrong=(this.wronganswers)*(100/this.ScoreArray.length);
    this.SpinnerScore=(this.score)*(100/this.ScoreArray.length);
  }

  

}
