import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit {

  constructor(private router: Router, private myscores: ScoreService) { }

  ngOnInit() {
  }

  closeBtn() {
    this.router.navigate(['/']);
  }

  muteAudio() {
    this.myscores.muteSound();
  }

}
