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
        style({ opacity: 1, transform: 'Scale(0.1)', offset: 0 }),
        style({ opacity: 1, transform: 'Scale(0.2)', offset: 0.1 }),
        style({ opacity: 1, transform: 'Scale(0.3)', offset: 0.2 }),
        style({ opacity: 1, transform: 'Scale(0.4)', offset: 0.3 }),
        style({ opacity: 1, transform: 'Scale(0.5)', offset: 0.4 }),
        style({ opacity: 1, transform: 'Scale(0.6)', offset: 0.5 }),
        style({ opacity: 1, transform: 'Scale(0.7)', offset: 0.6 }),
        style({ opacity: 1, transform: 'Scale(0.8)', offset: 0.7 }),
        style({ opacity: 1, transform: 'Scale(0.9)', offset: 0.8 }),
        style({ opacity: 1, transform: 'Scale(0.95)', offset: 0.9 }),
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
    }, 0);
  }

}
