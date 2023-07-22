import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { AiTwotoneDelete } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import './datatable.scss';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[];
  rows: GridRowsProp;
  slug: string;
};

const handleDelete = (id: number) => {
  console.log('iddddddd++++', id, 'has been deleted');
};
const DataTable = (props: Props) => {
  const actionColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params: any) => {
      console.log('params >>>', params);
      return (
        <div className="actions flex">
          <div className="view px-10">
            <Link to={`/${props.slug}/${params.row.id}}`}>
              <GrView />
            </Link>
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <AiTwotoneDelete />
          </div>
        </div>
      );
    }
  };
  return (
    <DataGrid
      className="data-table"
      rows={props.rows}
      columns={[...props.columns, actionColumn]}
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
