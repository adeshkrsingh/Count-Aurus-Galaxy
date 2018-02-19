import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  closeBtn() {
    this.router.navigate(['/']);
  }

}
