import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  constructor(private router: Router, private myscores: ScoreService) { }

  ngOnInit() {
  }

  playAgain() {
    this.myscores.resetAttempt();
    this.router.navigate(['/module1']);
  }
  nextMission() {
    this.router.navigate(['/module2']);
  }

}
