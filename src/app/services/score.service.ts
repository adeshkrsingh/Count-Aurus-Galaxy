import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  private counter = 0;
  audio: any;
  statusAudioPlaying: boolean;
  isSoundMuted: boolean;
  constructor() {
    this.audio = new Audio();
    this.statusAudioPlaying = false;
    this.isSoundMuted = false;
   }

  public saveScore(content) {
    let d = this.getScore();
    d = d + content;
    localStorage.setItem('score', String(d) );
    // console.log(d);
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

  public playSound(itemName) {
    this.audio.src = "assets/images/media/" + itemName;
    this.audio.load();
    this.playAudio();
  }
  private playAudio() {
    //var audio = new Audio();
    //audio.src = "assets/images/media/media2.mp3";
    //audio.load();
    if(!this.isSoundMuted) {
      if (this.statusAudioPlaying ) {
        this.audio.pause();
        this.statusAudioPlaying = false;
      } else {
        // this.audio.play();
      }
      this.audio.play();
      this.statusAudioPlaying = true;
    }
  }

  public muteSound() {
    // this.isSoundMuted = true;
    this.audio.pause();
    this.isSoundMuted = this.isSoundMuted === true ? false : true ;
  }

  public pauseAudio() {
    this.audio.pause();
  }

}
