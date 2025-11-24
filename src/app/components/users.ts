import { Component } from '@angular/core';

@Component({
  selector: 'bee-users',
  template: ` <div>Username: {{ username }}</div> `,
})
export class Users {
  username = 'youngTech';
}
