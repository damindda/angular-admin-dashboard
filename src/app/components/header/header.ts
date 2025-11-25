import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { ToggleMenu } from '../search-bar/toggle-menu';
import { AskAi } from '../search-bar/ask-ai-button';

@Component({
  selector: 'bee-header',
  imports: [SearchBar, ToggleMenu, AskAi],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'header.html',
})
export class Header {
  menuToggle = signal(false);
  notifying = signal(false);
  dropdownOpen = signal(false);
}
