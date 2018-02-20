import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-scorepage',
  templateUrl: './scorepage.component.html',
  styleUrls: ['./scorepage.component.css']
})
export class ScorepageComponent implements OnInit {
  userScore = 0;
  constructor(private myscores: ScoreService) { }

  ngOnInit() {
    this.score();
    this.myscores.pauseAudio();
  }

  public score() {
    this.userScore = Number ( this.myscores.getScore() );
  }

}
