import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'bee-header',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'header.html',
})
export class Header {
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
