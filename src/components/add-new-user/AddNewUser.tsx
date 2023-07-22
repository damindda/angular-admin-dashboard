import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewUser = (props: Props) => {
  const handleCreateUser = (e: any) => {
    e.preventDefault();
    console.log('handleCreateUser', e);
  };
  return (
    <div className="add-user">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          x
        </span>
        <h2 className="title">Add new {props.slug}</h2>
        <form onSubmit={handleCreateUser}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div>
                <div className="item">{column.headerName}</div>
                <input type={column.type} placeholder="{column.field}" />
              </div>
            ))}
          <button>Create a New User</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
