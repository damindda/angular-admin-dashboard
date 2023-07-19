import { Link } from 'react-router-dom';
import { CiAlignRight, CiBookmarkPlus, CiCalendarDate } from 'react-icons/ci';
import { menu } from './menu';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div>
      <ul className="flex-column sidebar">
        <li>
          <Link to="/" className="flex">
            <CiAlignRight />
            home
          </Link>
        </li>
        <li className="flex">
          <CiBookmarkPlus />
          <Link to="/users">users</Link>
        </li>
        <li className="flex">
          <CiCalendarDate />
          <Link to="/products">products</Link>
        </li>
      </ul>

      <div>
        {menu.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
