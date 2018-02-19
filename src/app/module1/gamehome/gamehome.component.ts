import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamehome',
  templateUrl: './gamehome.component.html',
  styleUrls: ['./gamehome.component.css']
})
export class GamehomeComponent implements OnInit {
  itemsArray = [] ;
  dragitem: String;
  dragNumber: Number;
  dragging: boolean;
  numberTens: Number;
  numberOnes: Number;
  message: String;
  correctOnes: Number;
  correctTens: Number;
  itemsOnes = [];
  itemsTens = [];
  isOnesCorrect: boolean;
  isTensCorrect: boolean;
  showLoader: boolean;
  showCheck: boolean;

  constructor(private router: Router,private myscores: ScoreService) { }

  ngOnInit() {
    this.numberOnes = 0;
    this.numberTens = 0;
    this.showLoader = true;
    this.showCheck = false;
    setTimeout(() => {
      this.dragging = false;
      this.isOnesCorrect = false;
      this.isTensCorrect = false;
      this.randomAdditems();
      this.randomItemsOnes();
      this.randomItemsTens();
      this.message = 'Drag Numbers';
      this.showLoader = false;
      this.playAudio();
    }, 2000);
    
  }

  refresh(): void {
    window.location.reload();
  }

  playAudio() {
    var audio = new Audio();
    audio.src = "assets/images/media/media2.mp3";
    audio.load();
    audio.play();
  }

  randomAdditems() {
    this.itemsArray = [];
    let rnd = Math.floor((Math.random() * 10) + 1);
    for (let index = 0; index < rnd; index++) {
      this.itemsArray.push(rnd);
    }
  }

  randomItemsOnes() {
    this.itemsOnes = [];
    this.correctOnes = Math.floor((Math.random() * 9) + 1);
    for (let index = 0; index < this.correctOnes; index++) {
      this.itemsOnes.push(this.correctOnes);
    }
  }

  randomItemsTens() {
    this.itemsTens = [];
    this.correctTens = Math.floor((Math.random() * 9) + 1);
    for (let index = 0; index < this.correctTens; index++) {
      this.itemsTens.push(this.correctTens);
    }
  }

  validCorrectness() {
    if(this.isOnesCorrect) {
      if(this.isTensCorrect) {
        this.myscores.saveScore(1);
        // this.refresh();
        this.message = 'Your Answer is Correct !';
        this.showCheck = true;
        setTimeout(() => {
          this.showCheck = false;
          this.myscores.setCorrectAttempt(1);
          if(this.myscores.isMissionPassed()) {
            this.router.navigate(['/over']);
          }
          this.ngOnInit();
        }, 2500);
      }
    }
  }

  addOnesDropItem(event) {
    if(this.dragNumber === this.correctOnes ) {
      this.isOnesCorrect = true;
      this.message = 'Correct !';
      this.validCorrectness();
    } else {
      this.isOnesCorrect = false;
      this.message = 'Try Again !';
    }
    this.dragitem = '';
    this.dragging = false;
    this.numberOnes = this.dragNumber;
  }
  addTensDropItem(event) {
    if (this.dragNumber === this.correctTens) {
      this.isTensCorrect = true;
      this.message = 'Correct !';
      this.validCorrectness();
    } else {
      this.isTensCorrect = false;
      this.message = 'Try Again !';
    }
    this.dragitem = '';
    this.dragging = false;
    this.numberTens = this.dragNumber;
  }

  startDrag(event, itm) {
    // alert('Release Drop ' + itm);

    this.dragitem = itm;
    this.dragNumber = itm;
    this.dragging = true;
  }

}
