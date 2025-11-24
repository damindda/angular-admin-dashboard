import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetricsCharts } from '../metrics-charts/metrics-charts';
import { DashboardTable } from '../table/table';
import { Title } from '../title';
import { MonthlySalesChart } from '../monthly-sales-chart/monthly-sales-chart.component';
import { WelcomeBanner } from '../welcome-banner/welcome-banner';
@Component({
  selector: 'bee-home',
  imports: [MetricsCharts, DashboardTable, Title, MonthlySalesChart, WelcomeBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
})
export class Home {}
