import { Component } from '@angular/core';

@Component({
  selector: 'bee-monthly-sales-chart',
  imports: [],
  templateUrl: './monthly-sales-chart.component.html',
})
export class MonthlySalesChart {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }
}
