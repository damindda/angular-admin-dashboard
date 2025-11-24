import { Header } from './../../components/header/header';
import { LeftNav } from './../../components/left-nav/left-nav';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bee-page-dashboard',
  imports: [LeftNav, Header, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'dashboard.html',
})
export class DashboardPage {}
