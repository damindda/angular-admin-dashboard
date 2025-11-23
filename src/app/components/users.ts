import { Component } from '@angular/core';

@Component({
  selector: 'users',
  template: ` <div>Username: {{ username }}</div> `,
})
export class Users {
  username = 'youngTech';
}
