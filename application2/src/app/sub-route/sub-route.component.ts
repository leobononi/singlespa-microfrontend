import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sub-route',
  templateUrl: './sub-route.component.html',
  styleUrls: ['./sub-route.component.css']
})
export class SubRouteComponent {
  title = 'application2';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }
}
