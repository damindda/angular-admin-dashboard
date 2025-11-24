import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MeticsItem } from '../../interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'bee-metrics-item',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex items-top justify-between rounded border border-gray-200 bg-white p-5 dark:border-gray-800 md:p-6"
    >
      <div class="flex flex-col items-start">
        <span
          [ngClass]="values().type === 'UP' ? 'bg-success-50' : 'bg-error-50'"
          class="flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-success-60"
        >
          @if ( values().type === "UP") {
          <img src="images/svgs/arrow-up.svg" class="w-4 h-4" alt="" />
          } @else {
          <img src="images/svgs/arrow-down.svg" class="w-4 h-4" alt="" />
          }
          <span [ngClass]="values().type === 'UP' ? 'text-green-700' : 'text-error-600'"
            >{{ values().percentage }}<span class="text-base px-1">%</span></span
          >
        </span>
        <div>
          <h4 class="mt-2 text-title-xl font-bold text-gray-800 dark:text-white/90">
            {{ values().value }}
          </h4>
          <span class="text-xl text-gray-500 dark:text-gray-400">{{ values().title }}</span>
        </div>
      </div>
      <div class="flex h-12 w-12 items-center justify-center">
        @if(values().icon){
        <img [src]="values().icon" alt="icons" />
        }@else {
        <div
          class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-tertiary rounded-full"
        >
          <span class="font-medium text-body">NA</span>
        </div>
        <img src="images/svgs/pie-chart.svg" alt="icons" />

        }
      </div>
    </div>
  `,
})
export class MetricsItem {
  values = input.required<MeticsItem>();
}
