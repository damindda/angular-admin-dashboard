import { Component } from '@angular/core';

@Component({
  selector: 'bee-template-message',
  template: `
    <div class="shadow-lg border w-full lg:p-12 md:p-8 text-center">
      <h1 class="mb-4 font-bold text-heading text-center">
        <p
          class="text-transparent bg-clip-text bg-linear-to-r to-emerald-600 from-sky-400 text-2xl sm:text-xl md:text-2xl lg:text-3xl"
        >
          Angular
        </p>
        <p class="uppercase text-white">Admin Dashboard</p>
      </h1>

      <p class="mb-4 text-white text-theme-sm dark:text-gray-400 text-center">
        Totally Free Angular Admin Template with Material UI Component and Pages.
      </p>
      <div class="flex items-center justify-center">
        <button
          type="button"
          class="text-white bg-linear-to-tr from-orange-400 via-orange-700 to-orange-800 hover:bg-linear-to-br focus:ring-8 focus:outline-none font-medium rounded-base text-sm py-4 px-10 text-center rounded-4xl"
        >
          Download Free
        </button>
      </div>
    </div>
  `,
})
export class TemplateMessage {}
