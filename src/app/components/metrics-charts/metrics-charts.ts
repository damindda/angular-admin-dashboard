import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetricsItem } from './metrics-item';
import { MeticsItem } from '../../interfaces';

@Component({
  imports: [MetricsItem],
  selector: 'bee-metrics-charts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'metrics-charts.html',
})
export class MetricsCharts {
  VALUES: MeticsItem[] = [
    {
      id: 1,
      percentage: 12.24,
      type: 'UP',
      value: 82,
      title: 'New Tickets',
      icon: 'images/svgs/bookshelf.svg',
    },
    {
      id: 1,
      percentage: 2.15,
      type: 'DOWN',
      value: 3214,
      title: 'Tickets Closed',
      icon: 'images/svgs/tickets-closed.svg',
    },
    {
      id: 1,
      percentage: 1.23,
      type: 'DOWN',
      value: 59,
      title: 'On Hold Tickets',
      icon: 'images/svgs/on-hold-tickets.svg',
    },
  ];
}
