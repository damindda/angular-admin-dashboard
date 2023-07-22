import { IconContext } from 'react-icons';
import { TfiBell } from 'react-icons/tfi';
import UserProfile from '../avatar/Avatar';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import './topnavbar.scss';
import { SearchResults } from './SearchResults';

const TopNavbar = () => {
  const data: SearchResults[] = [
    {
      id: 1,
      name: 'Paris'
    },
    {
      id: 2,
      name: 'London'
    },
    {
      id: 3,
      name: 'Tokyo'
    },
    {
      id: 4,
      name: 'Berlin'
    }
  ];
  return (
    <div className="top-navbar flex align-center space-between">
      <div className="logo-container flex align-center ">
        <img src="/public/favicon.svg" className="logo" /> <label className="px-10 text-white">HR Dashboard</label>
      </div>
      <div className="search-bar">
        <SearchBar placeholder="search items....!" data={data} />
      </div>
      <div className="top-nav-items flex">
        <ul className="flex">
          <li>
            <Link to="/" className="text-white">
              home
            </Link>
          </li>
          <li>
            <Link to="/users" className="text-white">
              users
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white">
              products
            </Link>
          </li>
          <li>
            <div className="notifications flex align-center text-white">
              <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                <div>
                  <TfiBell />
                </div>
              </IconContext.Provider>
            </div>
          </li>
        </ul>
        <div className="user-settings flex align-center text-white">
          <UserProfile />
          <label className="px-10">David Walker</label>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
