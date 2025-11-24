import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({
  selector: 'bee-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1
      class="text-transparent font-bold bg-clip-text bg-linear-to-r to-emerald-200 from-sky-800 text-2xl md:text-3xl lg:text-4xl"
    >
      {{ headerText() }}
    </h1>
  `,
})
export class Title {
  headerText = input.required<string>();
}
