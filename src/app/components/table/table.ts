import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  createdAt: string;
  invoiceId: string;
  assignedTo: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Printer not working',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Andy white',
    status: 'In Progress',
  },
  {
    position: 2,
    name: 'Unable to login to my email',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Ella Lockwood',
    status: 'On Hold',
  },
  {
    position: 3,
    name: 'Need a hand with onboarding',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Brian Paul',
    status: 'In Progress',
  },
  {
    position: 4,
    name: 'Error in my office package',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Sarah Carl',
    status: 'In Progress',
  },
  {
    position: 5,
    name: 'I can not login',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Sallajah Perumal',
    status: 'In Progress',
  },
  {
    position: 6,
    name: 'How to I get access to my files',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Brian Bell',
    status: 'New',
  },
  {
    position: 7,
    name: 'I need 2FA setup',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Mandy Clark',
    status: 'New',
  },
  {
    position: 8,
    name: 'Password change request',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Chandan Ghosh',
    status: 'New',
  },
  {
    position: 9,
    name: 'Mac Book not loading',
    createdAt: new Date().toDateString(),
    invoiceId: 'BHT-XD3FDE-FR94TRO-23',
    assignedTo: 'Eid Zohura',
    status: 'New',
  },
  {
    position: 10,
    name: 'Issue with my github access',
    createdAt: new Date().toDateString(),
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
  displayedColumns: string[] = ['position', 'name', 'createdAt', 'invoiceId', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
