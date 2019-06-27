import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-user',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
