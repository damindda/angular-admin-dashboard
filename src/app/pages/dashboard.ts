import { Header } from '../components/header/header';
import { LeftNav } from '../components/left-nav/left-nav';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bee-page-dashboard',
  imports: [LeftNav, Header, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="flex h-screen overflow-hidden">
    <bee-left-nav></bee-left-nav>
    <div class="flex flex-col">
      <div class="w-full">
        <bee-header></bee-header>
      </div>
      <div class="relative p-8 md:p-4 overflow-x-hidden overflow-y-auto">
        <router-outlet />
      </div>
    </div>
  </div>`,
})
export class DashboardPage {}
