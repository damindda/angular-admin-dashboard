import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Avatar } from './avatar';

@Component({
  selector: 'nav',
  template: `
    <div class="flex space-x-2 p-2">
      <a routerLink="/">Home</a>
      |
      <a routerLink="/users">Users</a>
      |
      <a routerLink="/users">
        <avatar />
      </a>
    </div>
  `,
  imports: [Avatar, RouterLink],
})
export class Nav {}
