import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })
    ),
      state('active', style({
        // backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  public name: string;
  public state = 'inactive'
  constructor(private router: Router, private myscores: ScoreService) { }

  playAudio() {
    var audio = new Audio();
    audio.src = "assets/images/media/media1.mp3";
    audio.load();
    audio.play();
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    setTimeout(() => {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      setTimeout(() => {
        this.router.navigate(['/module1']);
      }, 1000);
    }, 500);
  }

  ngOnInit() {
    // this.playAudio();
    this.myscores.playSound('media1.mp3');
    setTimeout(() => {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      setTimeout(() => {
        this.state = this.state === 'active' ? 'inactive' : 'active';
      }, 1500);
      setTimeout(() => {
        this.state = this.state === 'active' ? 'inactive' : 'active';
      }, 1000);
    }, 500);
  }

}
