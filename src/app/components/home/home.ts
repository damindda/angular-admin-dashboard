import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetricsCharts } from '../metrics-charts/metrics-charts';
import { DashboardTable } from '../table/table';
import { Title } from '../title';
import { WelcomeBanner } from '../welcome-banner/welcome-banner';
import { CurrentUtilization } from '../current-utilization/current-utilization';
import { TemplateMessage } from '../template-message';
import { Chat } from '../chat/chat';
@Component({
  selector: 'bee-home',
  imports: [
    MetricsCharts,
    DashboardTable,
    Title,
    WelcomeBanner,
    CurrentUtilization,
    TemplateMessage,
    Chat,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
})
export class Home {}
