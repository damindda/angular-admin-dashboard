import { Component, signal } from '@angular/core';

@Component({
  selector: 'bee-toggle-menu',
  template: `
    <button class="relative group" (click)="toggleMenu()">
      <div
        class="relative flex overflow-hidden w-[50px] h-[50px] transform transition-all duration-200 items-center justify-center rounded-lg border-black/20 text-gray-500 lg:h-11 lg:w-11 lg:border"
      >
        <div
          class="flex flex-col justify-between w-5 h-5 transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180"
        >
          <div
            class="bg-black h-0.5 w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"
          ></div>
          <div class="bg-black h-0.5 w-7 rounded transform transition-all duration-500 "></div>
          <div
            class="bg-black h-0.5 w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"
          ></div>
        </div>
      </div>
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
