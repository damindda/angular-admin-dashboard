import { Component } from '@angular/core';

@Component({
  selector: 'bee-search-bar',
  imports: [],
  template: `
    <form>
      <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only "
        >Search</label
      >
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src="images/svgs/header-menu/search.svg" class="w-6 h-6" alt="" />
        </div>
        <input
          type="search"
          id="search"
          class="w-full p-3 ps-9 bg-neutral-secondary-medium xl:w-[430px] border border-default-medium text-heading text-sm rounded-base focus:ring-brand rounded-lg focus:border-brand shadow-xs placeholder:text-body"
          placeholder="Search"
          required
        />
      </div>
    </form>
  `,
})
export class SearchBar {}
