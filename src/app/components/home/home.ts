import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../header/header';
import { LeftNav } from '../left-nav/left-nav';
import { MetricsCharts } from '../metrics-charts/metrics-charts';
import { DashboardTable } from '../table/table';
@Component({
  selector: 'bee-home',
  imports: [LeftNav, Header, MetricsCharts, DashboardTable],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
})
export class Home {}
