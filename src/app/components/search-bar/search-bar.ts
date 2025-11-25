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
        <button
          type="button"
          class="absolute end-1.5 bottom-1.5 text-white bg-blue-900 bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  `,
})
export class SearchBar {}
