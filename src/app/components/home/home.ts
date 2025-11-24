import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../header/header';
import { LeftNav } from '../left-nav/left-nav';
@Component({
  selector: 'home',
  imports: [LeftNav, Header],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
})
export class Home {}
