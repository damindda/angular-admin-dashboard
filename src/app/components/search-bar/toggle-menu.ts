import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'bee-toggle-menu',
  imports: [NgClass],
  template: `
    <button
      (click)="toggleMenu()"
      [ngClass]="
        selected() ? 'lg:bg-transparent dark:lg:bg-transparent bg-gray-100 dark:bg-gray-800' : ''
      "
      class="z-99999 flex h-10 w-10 items-center justify-center rounded-lg border-black/20 text-gray-500 lg:h-11 lg:w-11 lg:border"
    >
      <img src="images/svgs/header-menu/menu.svg" class="w-6 h-6" alt="" />
    </button>
  `,
})
export class ToggleMenu {
  selected = signal(false);
  sidebarToggle = signal(false);

  toggleMenu = () => {
    console.log('toggleMenu');
    this.sidebarToggle.set(true);
  };
}
