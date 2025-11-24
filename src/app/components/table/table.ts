import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  empId: string;
  invoiceId: string;
  assignedTo: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Andy white',
    status: 'In Progress',
  },
  {
    position: 2,
    name: 'Helium',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Ella Lockwood',
    status: 'On Hold',
  },
  {
    position: 3,
    name: 'Lithium',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Brian Paul',
    status: 'In Progress',
  },
  {
    position: 4,
    name: 'Beryllium',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Sarah Carl',
    status: 'In Progress',
  },
  {
    position: 5,
    name: 'Boron',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Sallajah Perumal',
    status: 'In Progress',
  },
  {
    position: 6,
    name: 'Carbon',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Brian Bell',
    status: 'New',
  },
  {
    position: 7,
    name: 'Nitrogen',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Mandy Clark',
    status: 'New',
  },
  {
    position: 8,
    name: 'Oxygen',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Chandan Ghosh',
    status: 'New',
  },
  {
    position: 9,
    name: 'Fluorine',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Eid Zohura',
    status: 'New',
  },
  {
    position: 10,
    name: 'Neon',
    empId: '234-FDE-923',
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Mira Carrie',
    status: 'New',
  },
];

@Component({
  selector: 'bee-table',
  imports: [MatTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'table.html',
})
export class DashboardTable {
  displayedColumns: string[] = ['position', 'name', 'empId', 'invoiceId', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
