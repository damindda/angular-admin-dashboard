import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({
  selector: 'bee-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-2xl font-bold text-heading md:text-3xl lg:text-4xl">
      <span class="text-transparent bg-clip-text bg-linear-to-r to-emerald-800 from-sky-600">{{
        headerText()
      }}</span>
    </h1>
  `,
})
export class Title {
  headerText = input.required<string>();
}
