import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {

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

}
