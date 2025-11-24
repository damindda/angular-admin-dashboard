import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({
  selector: 'bee-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1
      class="p-4 text-transparent bg-clip-text bg-linear-to-r to-emerald-600 from-sky-400 text-2xl md:text-3xl lg:text-4xl"
    >
      {{ headerText() }}
    </h1>
  `,
})
export class Title {
  headerText = input.required<string>();
}
