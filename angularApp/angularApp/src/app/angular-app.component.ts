import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-app',
  templateUrl: './angular-app.component.html',
  styleUrls: ['./angular-app.component.scss']
})
export class AngularAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }
}
