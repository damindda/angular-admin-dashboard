import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'bee-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-admin-dashboard');
}
