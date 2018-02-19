import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  animations: [
    trigger('rightleftAnimate', [
      state('state1', style({
      })),
      state('state2', style({
      })),
      transition('state1 <=> state2', animate('300ms ease-in', keyframes([
        style({ opacity: 1, transform: 'Scale(1.1)', offset: 0 }),
        style({ opacity: 1, transform: 'Scale(1.2)', offset: 0.25 }),
        style({ opacity: 1, transform: 'Scale(1.25)', offset: 0.5 }),
        style({ opacity: 1, transform: 'Scale(1.15)', offset: 0.75 }),
        style({ opacity: 1, transform: 'Scale(1)', offset: 1.0 })
      ])
      )),
    ])
  ],
})
export class CheckComponent implements OnInit {
  state: string;

  constructor() { }

  ngOnInit() {
    this.state = 'state1';
    setTimeout(() => {
      this.state = (this.state === 'state1' ? 'state2' : 'state1');
      setTimeout(() => {
        this.state = (this.state === 'state1' ? 'state2' : 'state1');
      }, 750);
    }, 500);
  }

}
