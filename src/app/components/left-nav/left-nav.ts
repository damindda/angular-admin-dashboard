import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
@Component({
  selector: 'bee-left-nav',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'left-nav.html',
})
export class LeftNav {
  sidebarToggle = signal(false);
  page = signal('ecommerce');
}
