import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  private counter = 0;
  constructor() { }

  public saveScore(content) {
    let d = this.getScore();
    d = d + content;
    localStorage.setItem('score', String(d) );
    console.log(d);
  }
  public getScore() {
    let data: Number;
    data = 0;
    try {
      data = Number ( localStorage.getItem('score') );
    } catch (err) {
      return 0;
    }
    return data;
  }

  public resetAttempt() {
    this.counter = 0;
  }
  public setCorrectAttempt(content) {
    this.counter++;
  }
  public getCorrectAttempt() {
    return this.counter;
  }
  public isMissionPassed() {
    if(this.counter == 5) {
      return true;
    } else {
      return false;
    }
  }

}
