import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './datatable.scss';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 4, col1: 'Hello', col2: 'World' },
  { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 6, col1: 'MUI', col2: 'is Amazing' }
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 }
];

const DataTable = () => {
  return (
    <DataGrid
      className="data-table"
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5
          }
        }
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnMenu
      disableColumnSelector
      disableDensitySelector
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 }
        }
      }}
    />
  );
};

export default DataTable;
