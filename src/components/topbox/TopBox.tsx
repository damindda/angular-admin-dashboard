import './topbox.scss';
import { topusers } from './data';
const TopBox = () => {
  return (
    <div className="topbox">
      <h2>Top Deals</h2>

      {topusers.map((user: any) => (
        <div key={user.id}>
          <div className="flex py-10 align-center">
            <img src={user.imgageUrl} alt="" className="user-image" />
            <div className="user px-10">{user.username}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
