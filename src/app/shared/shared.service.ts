import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  SomeData:any
  constructor() { }
  SendSavedUserAnswers(data: any){
    this.SomeData=data;
  }
  ReceiveSavedUserAnswers() {
    return this.SomeData;
  }

  SendScoreArray(data: any){
    this.SomeData=data;
  }
  ReceiveScoreArray() {
    return this.SomeData;
  }

  SendQuestions(data: any){
    this.SomeData=data;
  }
  ReceiveQuestions() {
    return this.SomeData;
  }
}
