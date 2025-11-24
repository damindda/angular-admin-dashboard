import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../header/header';
import { LeftNav } from '../left-nav/left-nav';
import { MetricsCharts } from '../metrics-charts/metrics-charts';
@Component({
  selector: 'home',
  imports: [LeftNav, Header, MetricsCharts],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
})
export class Home {}
