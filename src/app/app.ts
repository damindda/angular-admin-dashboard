import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comments } from './components/comments';

@Component({
  imports: [RouterOutlet, Comments],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-admin-dashboard');
}
