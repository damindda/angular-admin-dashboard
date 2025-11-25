import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { ToggleMenu } from '../search-bar/toggle-menu';

@Component({
  selector: 'bee-header',
  imports: [NgClass, SearchBar, ToggleMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'header.html',
})
export class Header {
  menuToggle = signal(false);
  notifying = signal(false);
  dropdownOpen = signal(false);
}
