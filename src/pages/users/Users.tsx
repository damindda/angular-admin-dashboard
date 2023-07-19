import DataTable from '../../components/data-table/DataTable';
import './users.scss';
const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button>Add new user</button>
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default Users;
