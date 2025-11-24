import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'bee-metrics-charts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'metrics-charts.html',
})
export class MetricsCharts {
  sidebarToggle = signal(false);
  menuToggle = signal(false);
  selected = signal(false);
  notifying = signal(false);
  dropdownOpen = signal(false);

  toggleMenu = () => {
    console.log('toggleMenu');
    this.sidebarToggle.set(true);
  };
}
