import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comments } from './components/comments';
import { Nav } from './components/nav';

@Component({
  imports: [RouterOutlet, Comments, Nav],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-admin-dashboard');
}
