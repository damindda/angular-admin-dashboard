import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import DataTable from '../../components/data-table/DataTable';

import './users.scss';
import AddNewUser from '../../components/add-new-user/AddNewUser';
import { useState } from 'react';

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Hello',
    status: true,
    col2: 'World',
    img: 'https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    col1: 'DataGridPro',
    status: true,
    col2: 'is Awesome',
    img: 'https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    col1: 'MUI',
    status: false,
    col2: 'is Amazing',
    img: 'https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    col1: 'Hello',
    status: false,
    col2: 'World',
    img: 'https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 5,
    col1: 'DataGridPro',
    status: true,
    col2: 'is Awesome',
    img: 'https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 6,
    col1: 'MUI',
    status: true,
    col2: 'is Amazing',
    img: 'https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 250 },
  {
    field: 'avatar',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      console.log('params >>>', params);
      return <img src={params.row.img || 'noavatar.png'} alt="" />;
    }
  },
  { field: 'status', headerName: 'Status', width: 250, type: 'boolean' },
  { field: 'col2', headerName: 'Column 2', width: 250 }
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>+ Add new user</button>
      </div>
      <div>
        <DataTable slug="users" rows={rows} columns={columns} />
      </div>
      {open && <AddNewUser slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
