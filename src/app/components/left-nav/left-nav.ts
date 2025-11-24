import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'bee-left-nav',
  imports: [NgClass, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'left-nav.html',
})
export class LeftNav {
  sidebarToggle = signal(false);
  page = signal('ecommerce');
}
