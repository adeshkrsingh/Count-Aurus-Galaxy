import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  help() {
    this.router.navigate(['/module1']);
  }

  playModule1() {
    this.router.navigate(['/module1/play']);
  }

  scoreGlobal() {
    this.router.navigate(['/score']);
  }

}
