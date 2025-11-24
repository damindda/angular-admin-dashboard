import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetricsCharts } from '../metrics-charts/metrics-charts';
import { DashboardTable } from '../table/table';
import { Title } from '../title';
@Component({
  selector: 'bee-home',
  imports: [MetricsCharts, DashboardTable, Title],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
})
export class Home {}
